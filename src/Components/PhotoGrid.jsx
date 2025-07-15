import React from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import './Style.css'

function PhotoGrid({ photos, favorites, toggleFavorite }) {
  return (
    <div className="photoFetch-wrapper">

      {photos.map(photo => (
        <div className='photoCard' key={photo.id}>
          <img src={photo.urls.small} alt={photo.alt_description} />

          <div className="heartIcon" onClick={() => toggleFavorite(photo)}>
            {favorites.some(fav => fav.id === photo.id) ? (
              <FaHeart color="red" />
            ) : (
              <FaRegHeart color="#ccc" />
            )}
          </div>

        </div>
      ))}

    </div>
  )
}

export default PhotoGrid