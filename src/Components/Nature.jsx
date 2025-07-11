import React from 'react'
import PhotoGallery from './PhotoGallery'

function Nature() {
  return (
    <div className='nature-wrapper'>
        <PhotoGallery query='nature'/>
    </div>
  )
}

export default Nature