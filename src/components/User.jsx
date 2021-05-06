/* eslint-disable react/jsx-closing-tag-location */
import { useContext } from 'react'
import UserContext from '../services/Context'

const User = () => {
  const { userContext } = useContext(UserContext)
  const user = userContext.user
  return (
    <div className='user'>
      {
        user?.images.length > 0
          ? <img className='user_img' src={user.images[0].url} alt={user?.display_name} />
          : <span className='user_icon'>
            <i className='fas fa-user' />
          </span>
      }
      <span className='user_username'>{user?.display_name || 'Username'}</span>
    </div>
  )
}

export default User
