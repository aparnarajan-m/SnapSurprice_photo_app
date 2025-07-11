import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Wallpeper from './Components/Wallpeper'
import About from './Components/About'

function App() {

  return (
    <BrowserRouter>
    <div className='main-wrapper'>
      <Navbar/>
      <Routes>
        <Route path='/Home' element= {<Home/>}/>
        <Route path='/Wallpeper' element= {<Wallpeper/>}/>
      </Routes>
      <About/>
    </div>
    </BrowserRouter>
  )
}

export default App
