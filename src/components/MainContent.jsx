import VideoDetails from './VideoDetails'
import VideoContainer from './VideoContainer'
import BrowserBar from './BrowserBar'
import User from './User'

const MainContent = () => {
  return (
    <section className='main'>
      <BrowserBar />
      <User />
      <VideoDetails />
      <VideoContainer />
    </section>
  )
}

export default MainContent
