import React from 'react'
import PhotoFetcher from './PhotoFetcher'

function Nature() {
  return (
    <div className='nature-wrapper'>
        <PhotoFetcher query='nature'/>
    </div>
  )
}

export default Nature