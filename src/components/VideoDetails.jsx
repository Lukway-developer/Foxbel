/* eslint-disable no-case-declarations */
import { useEffect, useContext } from 'react'
import UserContext from '../services/Context'

const VideoDetails = () => {
  const { userContext, setUserContext } = useContext(UserContext)
  let detailsData = {
    title: '',
    caption: '',
    image: '',
    extra: ''
  }

  // If there is a token, get current data
  useEffect(() => {
    handleGetCurrentData('recents')
  }, [userContext.token])

  const handleGetCurrentData = (section) => {
    let data
    if (userContext.currentSection) {
      switch (section) {
        case 'recents':
          const base1 = userContext.currentData.items[0].track
          data = {
            title: base1.name,
            caption: base1.artists[0].name,
            image: base1.album.images[0].url,
            extra: base1.album.release_date,
            track: base1.uri
          }
          break

        case 'artists':
          const base2 = userContext.currentData.items[0]
          data = {
            title: base2.name,
            caption: base2.genres[0],
            image: base2.images[0].url,
            extra: `${base2.followers.total} seguidores`,
            track: base2.uri
          }
          break

        case 'albums':
          const base3 = userContext.currentData.items[0].album
          data = {
            title: base3.name,
            caption: base3.artists[0].name,
            image: base3.images[0].url,
            extra: base3.release_date,
            track: base3.uri
          }
          break

        case 'musics':
          const base4 = userContext.currentData.items[0]
          data = {
            title: base4.name,
            caption: base4.artists[0].name,
            image: base4.album.images[0].url,
            extra: base4.album.release_date,
            track: base4.uri
          }
          break

        case 'saved':
          const base5 = userContext.currentData.items[0].track
          data = {
            title: base5.name,
            caption: base5.artists[0].name,
            image: base5.album.images[0].url,
            extra: base5.album.release_date,
            track: base5.uri
          }
          break

        case 'genres':
          const base6 = userContext.currentData.albums.items[0]
          data = {
            title: base6.name,
            caption: base6.artists[0].name,
            image: base6.images[0].url,
            extra: base6.release_date,
            track: base6.uri
          }
          break

        default:
          break
      }
    }
    return data
  }

  const handleSetCurrentTrack = () => {
    setUserContext({
      ...userContext,
      currentTrack: detailsData.track
    })
  }

  if (userContext.currentSection) detailsData = handleGetCurrentData(userContext.currentSection)

  return (
    <div className='details'>
      <div className='details_img_container'>
        <img className='details_img' src={detailsData.image} alt='' />
        <button className='details_img_button' onClick={handleSetCurrentTrack}>
          <i className='fas fa-play' />
        </button>
      </div>

      <div className='details_info_container'>
        <div className='details_text_container'>
          <h2 className='details_title'>{detailsData.title}</h2>

          <div className='details_caption_container'>
            <h4 className='details_caption'>{detailsData.caption}</h4>
            <span className='details_followers'>{detailsData.extra}</span>
          </div>

          <p className='details_description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, sapiente dicta!
          </p>
        </div>

        <div className='details_buttons_container'>
          <button className='details_button-play' onClick={handleSetCurrentTrack}>Reproducir</button>
          <button className='details_button-follow'>Follow</button>
          <button className='details_button-menu'><i className='fas fa-ellipsis-h' /></button>
        </div>
      </div>
    </div>
  )
}

export default VideoDetails
