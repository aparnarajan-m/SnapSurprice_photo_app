import React, { useState, useEffect } from 'react';
import blueLogo from '../assets/camera-logo-blue.png';
import InputSearch from './InputSearch';
import PhotoGrid from './PhotoGrid';
import './Home.css';

function Home({ favorites, toggleFavorite }) {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);

  const Access_Key = 'mEdZzIqQBcG71NokgtnHnGJlAFdSPj_q39MUveYIcjs';

  useEffect(() => {
    const categories = ['wallpapers', '3d renders', 'interiors', 'nature', 'travel'];

    const fetchPhotosByCategory = async () => {
      try {
        let allPhotos = [];

        // Fetch random category photos on home page
        for (const category of categories) {
          const res = await fetch(`https://api.unsplash.com/search/photos?query=${category}&per_page=6&client_id=${Access_Key}`);
          const data = await res.json();
          allPhotos.push(...data.results);
        }

        // Shuffle the array to make it random
        allPhotos.sort(() => Math.random() - 0.5);

        setPhotos(allPhotos);
        setLoading(false);

      } catch (error) {
        console.error('Error fetching random category photos:', error);
        setLoading(false);
      }
    };

    fetchPhotosByCategory();
  }, []);


  // handleSearch function 
  const handleSearch = async () => {
    if(query.trim() === '') return;

    setLoading(true);
    const res = await fetch(`https://api.unsplash.com/search/photos?query=${query}&per_page=30&client_id=${Access_Key}`);
    const data = await res.json();
    setPhotos(data.results);
    setLoading(false);
  }

  //Loading 
  if (loading) {
    return (
      <div className='loading-wrapper'>
        <img src={blueLogo} alt="logoImage" />
        <h2 className='loadingText'>Loading random photos...</h2>
      </div>
    );
  }

  return (
    <div className="home-wrapper">

      <InputSearch
        query={query}
        setQuery={setQuery}
       handleSearch = {handleSearch}
      />


      <PhotoGrid
        photos={photos}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />

    </div>
  );
}

export default Home;
