import React from 'react'
import blueLogo from '../assets/camera-logo-blue.png'
import './Favorites.css'
import PhotoGrid from './PhotoGrid'

function Favorites({ favorites, toggleFavorite }) {
  return (
    <div className='favorites-wrapper'>
      <h2>Favorites</h2>
      {favorites.length > 0 ? (
        <PhotoGrid
          photos={favorites}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      ) : (
        <><img src={blueLogo} alt="snapSurpriseLogo" /><h2 className='favoriteText'>No Favorite Photos..!</h2></>
      )}
      
    </div>
  )
}

export default Favorites