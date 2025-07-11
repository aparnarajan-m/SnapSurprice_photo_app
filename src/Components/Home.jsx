import React from 'react'
import { useState, useEffect } from 'react';
import './Home.css'

function Home() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  const Access_Key = 'mEdZzIqQBcG71NokgtnHnGJlAFdSPj_q39MUveYIcjs';

  const categories = ['wallpapers','renders', 'interior', 'nature', 'travel'];

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const allPhotos = [];

        for (const category of categories) {
          const res = await fetch(`https://api.unsplash.com/search/photos?query=${category}&per_page=3&client_id=${Access_Key}`);
          const data = await res.json();
          allPhotos.push(...data.results);
          allPhotos.sort(() => Math.random() - 0.5);
        }
        setPhotos(allPhotos);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching photos:', error);
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  if (loading) return <p style={{ color: 'blue' }}>Loading mixed categories...</p>;

  return (
    <div className="home-wrapper">
      <div className='homeSec1'><div className='homeinputDiv'><input className='homeInput' type="text" placeholder='Type...' /> <button className='homeBtn'>Search</button></div></div>
      <div className='homePic-wrapper'>
      {photos.map((photo) => (
        <img key={photo.id} src={photo.urls.small} alt={photo.alt_description} />
      ))}
      </div>
    </div>
  );
}

export default Home