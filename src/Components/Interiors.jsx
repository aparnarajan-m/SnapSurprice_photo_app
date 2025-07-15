import React from 'react'
import PhotoFetcher from './PhotoFetcher'

function ArchitectureInteriors({ favorites, toggleFavorite }) {
  return (
    // <div>
    //     <PhotoFetcher query= 'Interiors'/>
    // </div>
    <PhotoFetcher
      query="Interiors"
      favorites={favorites}
      toggleFavorite={toggleFavorite}
    />
  )
}

export default ArchitectureInteriors