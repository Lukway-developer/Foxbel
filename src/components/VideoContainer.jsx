import { useContext } from 'react'
import UserContext from '../services/Context'
import VideoItem from './VideoItem'

const VideoContainer = () => {
  const { userContext } = useContext(UserContext)
  const currentSection = userContext.currentSection
  const currentData = userContext.currentData

  return (
    <section className='container'>
      <h2 className='container_title'>Resultados</h2>
      <div className='container_grid'>

        {/* Since the data from the Spotify API is supplied in different
            ways depending on the query, I used a conditional rendering for each case */}

        {
          currentSection === 'recents'
            ? currentData.items.map(item => (
              <VideoItem
                key={item?.played_at}
                title={item?.track.name}
                caption={item?.track.artists[0].name}
                image={item?.track.album.images[0].url}
                track={item?.track.uri}
              />
            ))
            : <></>
        }

        {
          currentSection === 'artists'
            ? currentData.items.map(item => (
              <VideoItem
                key={item?.id}
                title={item?.name}
                caption={item?.genres[0]}
                image={item?.images[0].url}
                track={item?.uri}
              />
            ))
            : <></>
        }

        {
          currentSection === 'albums'
            ? currentData.items.map(item => (
              <VideoItem
                key={item?.album.id}
                title={item?.album.name}
                caption={item?.album.artists[0].name}
                image={item?.album.images[0].url}
                track={item?.album.uri}
              />
            ))
            : <></>
        }

        {
          currentSection === 'musics'
            ? currentData.items.map(item => (
              <VideoItem
                key={item?.id}
                title={item?.name}
                caption={item?.artists[0].name}
                image={item?.album.images[0].url}
                track={item?.uri}
              />
            ))
            : <></>
        }

        {
          currentSection === 'saved'
            ? currentData.items.map(item => (
              <VideoItem
                key={item?.track.id}
                title={item?.track.name}
                caption={item?.track.artists[0].name}
                image={item?.track.album.images[0].url}
                track={item?.track.uri}
              />
            ))
            : <></>
        }

        {
          currentSection === 'genres'
            ? currentData.albums.items.map(item => (
              <VideoItem
                key={item?.id}
                title={item?.name}
                caption={item?.artists[0].name}
                image={item?.images[0].url}
                track={item?.uri}
              />
            ))
            : <></>
        }
      </div>
    </section>
  )
}

export default VideoContainer
