import SpotifyPlayer from 'react-spotify-web-playback'

const Player = ({ token, tracksUri, playState }) => {
  if (!token) return null
  return (
    <SpotifyPlayer
      token={token}
      uris={tracksUri || []}
      play={playState}
      initialVolume={0.5}
      magnifySliderOnHover
      styles={{
        activeColor: '#fff',
        bgColor: '#FF7676',
        color: '#fff',
        height: '60px',
        loaderColor: '#fff',
        sliderColor: '#1ed760',
        sliderHandleColor: '#191414',
        trackArtistColor: '#eee',
        trackNameColor: '#fff'
      }}
    />
  )
}

export default Player
