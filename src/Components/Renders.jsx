import React from 'react'
import PhotoFetcher from './PhotoFetcher'

function Renders({ favorites, toggleFavorite }) {
  return (
    // <div className='renders-wrapper'>
    //   <PhotoFetcher query='Renders'/>
    // </div>
    <PhotoFetcher
      query="Renders"
      favorites={favorites}
      toggleFavorite={toggleFavorite}
    />
  )
}

export default Renders