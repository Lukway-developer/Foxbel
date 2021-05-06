/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-indent */
import { useState, useEffect, useContext } from 'react'
import SpotifyWebApi from 'spotify-web-api-js'
import { getTokenFromURL } from '../services/GetTokenFromURL'
import UserContext from '../services/Context'
import NavBar from '../components/NavBar'
import MainContent from '../components/MainContent'
// import ControlBar from '../components/ControlBar'
import SpotifyPlayer from '../components/Player'

const spotify = new SpotifyWebApi()

const Home = () => {
  const [tracks, setTracks] = useState([])
  const [playState, setPlayState] = useState(false)
  const [firstLoad, setFirstLoad] = useState(true)
  const { userContext, setUserContext } = useContext(UserContext)
  const homeAnimationTime = 3000
  const hash = getTokenFromURL()
  const token = hash.access_token

  // Check if there is a token
  useEffect(() => {
    if (token) {
      spotify.setAccessToken(token)
      spotify.getMe().then(user => {
        setUserContext({
          token: token,
          user: user
        })
      })
    } else {
      setTimeout(() => {
        window.location.href = '/login'
      }, homeAnimationTime)
    }
  }, [])

  // Get and send to the player an initial track
  useEffect(() => {
    if (firstLoad && userContext.currentData) {
      getInitialTrack()
      setFirstLoad(false)
    }
  }, [userContext.currentData])

  // Obtain and send to the player each track that you want to play
  useEffect(() => {
    const currentTrack = userContext.currentTrack
    if (currentTrack) {
      setPlayState(true)
      setTracks(currentTrack)
    }
  }, [userContext.currentTrack])

  const getInitialTrack = () => {
    const initialTrack = userContext.currentData.items[0].track.uri
    setTracks(initialTrack)
  }

  return (
    <main className='home'>
      <NavBar />
      <MainContent />
      <SpotifyPlayer token={token} tracksUri={tracks} playState={playState} />
    </main>
  )
}

export default Home
