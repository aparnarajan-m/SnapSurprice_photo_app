import React from 'react'
import PhotoFetcher from './PhotoFetcher'

function Wallpeper({ favorites, toggleFavorite }) {
  return (
    <PhotoFetcher
      query="wallpapers"
      favorites={favorites}
      toggleFavorite={toggleFavorite}
    />
  )
}

export default Wallpeper