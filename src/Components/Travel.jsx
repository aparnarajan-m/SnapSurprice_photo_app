import React from 'react'
import PhotoFetcher from './PhotoFetcher'

function Travel({ favorites, toggleFavorite }) {
  return (
    // <div className='travel-wrapper'>
    //    <PhotoFetcher query='Travel'/>
    // </div>
        <PhotoFetcher
      query="Travel"
      favorites={favorites}
      toggleFavorite={toggleFavorite}
    />
  )
}

export default Travel 