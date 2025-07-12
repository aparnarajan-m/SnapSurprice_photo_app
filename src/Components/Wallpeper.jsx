import React from 'react'
import PhotoFetcher from './PhotoFetcher'

function Wallpeper() {
  return (
    <div className='wallpeper-wrapper'>
        <PhotoFetcher query='wallpapers'/>
    </div>
  )
}

export default Wallpeper