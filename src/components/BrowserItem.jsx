import { useContext } from 'react'
import UserContext from '../services/Context'

const BrowserItem = ({ title, caption, image, track }) => {
  const { userContext, setUserContext } = useContext(UserContext)

  const handleSetCurrentTrack = () => {
    setUserContext({
      ...userContext,
      currentTrack: track
    })
  }

  return (
    <button className='browser_item' onClick={handleSetCurrentTrack}>
      <div className='browser_item_img_container'>
        <img className='browser_item_img' src={image} alt='' />
        <i className='browser_item_icon fas fa-play' />
      </div>
      <p className='browser_item_title'>
        {title}
      </p>
      <h4 className='browser_item_caption'>
        {caption}
      </h4>
    </button>
  )
}

export default BrowserItem
