import React from 'react'
import { useState, useEffect } from 'react';
import './PhotoGallery.css'

function PhotoGallery({ query }) {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true)

    const Access_Key = 'mEdZzIqQBcG71NokgtnHnGJlAFdSPj_q39MUveYIcjs';

    useEffect(() => {
        fetch(`https://api.unsplash.com/search/photos?query=${query}&per_page=12&client_id=${Access_Key}`)
            .then(res => res.json())
            .then(data => {
                setPhotos(data.results);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            })
    }, [query]);
    if (loading) return <p style={{ color: 'blue' }}>Loading {query}........</p>

    return (
        <div className='PhotoGallery'>
            {photos.map(photo => (
                <img key={photo.id} src={photo.urls.small} alt={photo.alt_description} />
            ))}
        </div>
    )
}

export default PhotoGallery