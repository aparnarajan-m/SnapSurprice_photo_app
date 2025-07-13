import React from 'react'
import { useState, useEffect } from 'react';
import blueLogo from '../assets/camera-logo-blue.png'
import { FaRegHeart } from 'react-icons/fa';
import './Home.css'

function Home() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  const Access_Key = 'mEdZzIqQBcG71NokgtnHnGJlAFdSPj_q39MUveYIcjs';

  useEffect(() => {
    const fetchRandomPhotos = async () => {
      try {
        const res = await fetch(`https://api.unsplash.com/photos/random?count=30&client_id=${Access_Key}`);
        const data = await res.json();
        setPhotos(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching random photos:', error);
        setLoading(false);
      }
    };

    fetchRandomPhotos();
  }, []);

  //loading random photos
  if (loading) return <div className='loading-wrapper'><img src={blueLogo} alt="logoImage" /> <h2 className='loadingText'>Loading random photos...</h2></div>;

  return (
    <div className="home-wrapper">
      <div className='homeSec1'><div className='homeinputDiv'><input className='homeInput' type="text" placeholder='Type...' /> <button className='homeBtn'>Search</button></div></div>
      <div className='homePic-wrapper photogallery-wrapper'>
        {photos.map((photo) => (
          <div className="photoCard" key={photo.id}>
            <img src={photo.urls.small} alt={photo.alt_description} />
            <div className='heartIcon'>
              <FaRegHeart style={{ color: '#ccc', fontSize: '24px' }}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home