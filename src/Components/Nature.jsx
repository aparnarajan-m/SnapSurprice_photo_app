import React from 'react'
import PhotoFetcher from './PhotoFetcher'

function Nature({ favorites, toggleFavorite }) {
  return (
    // <div className='nature-wrapper'>
    //     <PhotoFetcher query='nature'/>
    // </div>
    <PhotoFetcher
      query="nature"
      favorites={favorites}
      toggleFavorite={toggleFavorite}
    />
  )
}

export default Nature