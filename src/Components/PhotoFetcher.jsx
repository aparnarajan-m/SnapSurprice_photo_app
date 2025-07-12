import React from 'react'
import { useState, useEffect } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import './PhotoFetcher.css'

function PhotoGallery({ query }) {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);

    const Access_Key = 'mEdZzIqQBcG71NokgtnHnGJlAFdSPj_q39MUveYIcjs';

    useEffect(() => {
        fetch(`https://api.unsplash.com/search/photos?query=${query}&per_page=30&client_id=${Access_Key}`)
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
    if (loading) return <p style={{ color: 'blue', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '300px' }}>Loading {query}........</p>

    return (
        <div className='photogallery-wrapper'>
            {photos.map(photo => (
                <div className='photoCard' key={photo.id}>
                    <img src={photo.urls.small} alt={photo.alt_description} />
                    <div className='heartIcon'>
                        <FaRegHeart style={{ color: '#ccc', fontSize: '24px' }}/>
                    </div>
                </div>  
            ))}
        </div>
    )
}

export default PhotoGallery