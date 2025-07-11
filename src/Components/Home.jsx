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
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quisquam, quis dolorem quo laboriosam quae,tenetur iusto, <br /> obcaecati similique vero ullam ratione laborum repudiandae sapiente quidem aliquam veritatis vitae id.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Voluptates quisquam, quis dolorem quo laboriosam quae,tenetur iusto, obcaecati similique vero ullam ratione laborum repudiandae sapiente quidem aliquam veritatis vitae id.<br /> 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quisquam, quis dolorem quo laboriosam quae,tenetur iusto, <br /> obcaecati similique vero ullam ratione laborum repudiandae sapiente quidem aliquam veritatis vitae id. <br />
       </p>
      {photos.map((photo) => (
        <img key={photo.id} src={photo.urls.small} alt={photo.alt_description} />
      ))}
    </div>
  );
}

export default Home