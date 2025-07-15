import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Wallpeper from './Components/Wallpeper'
import Renders from './Components/Renders'
import Interiors from './Components/Interiors'
import Nature from './Components/Nature'
import Travel from './Components/Travel'
import Favorites from './Components/Favorites'
import Footer from './Components/Footer'

function App() {
  const [favorites, setFavorites] = useState([]);
  const location = useLocation();

  const toggleFavorite = (photo) => {
    
    // to check if that photo is already in the favorite list
    const isFavorite = favorites.some(fav => fav.id === photo.id);

    if (isFavorite) {
      // Remove from favorites
      setFavorites(favorites.filter(fav => fav.id !== photo.id));
    } else {
      // Add to favorites
      setFavorites([...favorites, photo]);
    }
  };

  return (
      <div className='main-wrapper'>
        <Navbar />
        <Routes>
          <Route path='/Home' element={<Home favorites={favorites} toggleFavorite={toggleFavorite} />} />
          <Route path='/Wallpeper' element={<Wallpeper favorites={favorites} toggleFavorite={toggleFavorite} />} />
          <Route path='/Nature' element={<Nature favorites={favorites} toggleFavorite={toggleFavorite} />} />
          <Route path='/Travel' element={<Travel favorites={favorites} toggleFavorite={toggleFavorite} />} />
          <Route path='/Renders' element={<Renders favorites={favorites} toggleFavorite={toggleFavorite} />} />
          <Route path='/Interiors' element={<Interiors favorites={favorites} toggleFavorite={toggleFavorite} />} />
          <Route path='/Favorites' element={<Favorites favorites={favorites} toggleFavorite={toggleFavorite} />} />
        </Routes>
        {/* Only show About if not on /favorites page */}
        {location.pathname !== '/Favorites' && <Footer/>}
      </div>
  )
}

export default App
