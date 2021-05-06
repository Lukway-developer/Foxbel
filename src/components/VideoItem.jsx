import { useContext } from 'react'
import UserContext from '../services/Context'

const VideoItem = ({ title, caption, image, track }) => {
  const { userContext, setUserContext } = useContext(UserContext)

  const handleSetCurrentTrack = () => {
    setUserContext({
      ...userContext,
      currentTrack: track
    })
  }

  return (
    <div className='item'>
      <div className='item_img_container'>
        <img className='item_img' src={image} alt='Album' />
        <button className='item_button-play' onClick={handleSetCurrentTrack}>
          <i className='fas fa-play' />
        </button>
        <button className='item_button-menu'>
          <i className='fas fa-ellipsis-v' />
        </button>
      </div>
      <h3 className='item_title'>{title}</h3>
      <h4 className='item_caption'>{caption}</h4>
    </div>
  )
}

export default VideoItem
