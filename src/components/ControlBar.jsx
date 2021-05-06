import IconNext from '../icon/IconNext'
import IconPlay from '../icon/IconPlay'
import IconPrevious from '../icon/IconPrevious'

const ControlBar = () => {
  return (
    <div className='control'>
      <div className='control_music'>
        <img className='control_music_img' src='./images/foxbel-music-white-icon.png' alt='' />
        <div className='control_info_container'>
          <h3 className='control_info_title'>Cancion</h3>
          <h4 className='control_info_caption'>Artista - Álbum</h4>
        </div>
      </div>

      <div className='control_player'>
        <button className='control_player-previous'>
          <IconPrevious />
        </button>
        <button className='control_player-play'>
          <IconPlay />
        </button>
        <button className='control_player-next'>
          <IconNext />
        </button>
      </div>

      <div className='control_volume'>
        <input className='control_volume_input' type='range' name='' id='' min='0' max='100' />
        <i className='fas fa-volume-off' />
      </div>
    </div>
  )
}

export default ControlBar
