/* eslint-disable react/jsx-indent */
import { useState, useRef } from 'react'
import SpotifyWebApi from 'spotify-web-api-js'
import BrowserItem from './BrowserItem'

const spotify = new SpotifyWebApi()

const BrowserBar = () => {
  const [searchItems, setSearchItems] = useState([])
  const searchRef = useRef(null)

  const handleSetBrowser = (e) => {
    e.stopPropagation()
    const value = e.target.value

    if (value) {
      searchRef.current.className = 'browser_item_container'

      spotify.searchTracks(value).then(res => {
        const items = res.tracks.items
        console.log(items)
        setSearchItems(items)
      })
    } else {
      searchRef.current.className = 'browser_item_container-hidden'
    }
  }

  const handleOcultBrowser = () => {
    setTimeout(() => {
      searchRef.current.className = 'browser_item_container-hidden'
    }, 500)
  }

  return (
    <div className='browser' onBlur={handleOcultBrowser}>
      <input
        className='browser_input'
        type='text'
        placeholder='Buscar'
        maxLength='40'
        onChange={handleSetBrowser}
      />
      <span className='browser_icon'>
        <i className='fas fa-search' />
      </span>

      {searchItems
        ? <div ref={searchRef} className='browser_item_container-hidden'>
          {searchItems.map(item =>
            <BrowserItem
              key={item.id}
              title={item.name}
              caption={item.artists[0].name}
              image={item.album.images[1].url}
              track={item.uri}
            />
          )}
          </div>
        : <></>}
    </div>
  )
}

export default BrowserBar
