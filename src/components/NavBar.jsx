import { useContext, useEffect, useRef } from 'react'
import SpotifyWebApi from 'spotify-web-api-js'
import UserContext from '../services/Context'
import Logo from './Logo'

const spotify = new SpotifyWebApi()
const limitOfTracks = 20

const NavBar = () => {
  const { userContext, setUserContext } = useContext(UserContext)
  const navRef = useRef(null)

  // If Token exists, set music
  useEffect(() => {
    handleSetMusic('recents')
  }, [userContext.token])

  /*
    Since the data from the Spotify API is supplied in different
    ways depending on the query, I used a switch case to format the
    information in the context for the different queries.
  */

  const handleSetMusic = (section, gender) => {
    if (userContext.token) {
      switch (section) {
        case 'recents':
          spotify.getMyRecentlyPlayedTracks({ limit: limitOfTracks }).then(playlist => {
            setUserContext({
              ...userContext,
              currentSection: section,
              currentData: playlist
            })
          })
          break

        case 'artists':
          spotify.getMyTopArtists({ limit: limitOfTracks }).then(artist => {
            setUserContext({
              ...userContext,
              currentSection: section,
              currentData: artist
            })
          })
          break

        case 'albums':
          spotify.getMySavedAlbums({ limit: limitOfTracks }).then(albums => {
            setUserContext({
              ...userContext,
              currentSection: section,
              currentData: albums
            })
          })
          break

        case 'musics':
          spotify.getMyTopTracks().then(tracks => {
            setUserContext({
              ...userContext,
              currentSection: section,
              currentData: tracks
            })
          })
          break

        case 'saved':
          spotify.getMySavedTracks().then(tracks => {
            setUserContext({
              ...userContext,
              currentSection: section,
              currentData: tracks
            })
          })
          break

        case 'genres':
          spotify.searchAlbums(gender).then(album => {
            setUserContext({
              ...userContext,
              currentSection: section,
              currentData: album
            })
          })
          break
        default:
          break
      }
    }
  }

  const handleOpenNav = () => {
    console.log('Nav Open')
    navRef.current.className = 'nav open'
  }
  const handleCloseNav = () => {
    console.log('Nav Closed')
    navRef.current.className = 'nav'
  }

  return (
    <aside className='nav' ref={navRef}>

      <button className='nav_button_open' onClick={handleOpenNav}>
        <i className='fas fa-bars' />
      </button>

      <button className='nav_button_close' onClick={handleCloseNav}>
        <i className='fas fa-times' />
      </button>

      <Logo className='nav_logo' theme='normal' />

      <article className='nav_article'>
        <h2 className='nav_title'>Mi Librería</h2>
        <div className='nav_button_container'>
          <button className='nav_button' onClick={() => handleSetMusic('recents')}>Recientes</button>
          <button className='nav_button' onClick={() => handleSetMusic('artists')}>Artistas</button>
          <button className='nav_button' onClick={() => handleSetMusic('albums')}>Álbums</button>
          <button className='nav_button' onClick={() => handleSetMusic('musics')}>Recomendados</button>
          <button className='nav_button' onClick={() => handleSetMusic('saved')}>Guardados</button>
        </div>
      </article>

      <article className='nav_article'>
        <h2 className='nav_title'>Playlist</h2>
        <div className='nav_button_container'>
          <button className='nav_button' onClick={() => handleSetMusic('genres', 'metal')}>Metal</button>
          <button className='nav_button' onClick={() => handleSetMusic('genres', 'dance')}>Para Bailar</button>
          <button className='nav_button' onClick={() => handleSetMusic('genres', 'rock')}>Rock 90s</button>
          <button className='nav_button' onClick={() => handleSetMusic('genres', 'ballad')}>Baladas</button>
        </div>
      </article>
    </aside>
  )
}

export default NavBar
