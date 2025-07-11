import React from 'react'
import PhotoGallery from './PhotoGallery'
import './Travel.css'

function Travel() {
  return (
    <div className='travel-wrapper'>
       <PhotoGallery query='Travel'/>
    </div>
  )
}

export default Travel 