import React from 'react'
import './Wallpeper.css'
import PhotoGallery from './PhotoGallery'

function Wallpeper() {
  return (
    <div className='wallpeperContainer'>
        Wallpeper Container
        <PhotoGallery query='wallpapers'/>
    </div>
  )
}

export default Wallpeper