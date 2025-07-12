import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Wallpeper from './Components/Wallpeper'
import Renders from './Components/Renders'
import Interiors from './Components/Interiors'
import Nature from './Components/Nature'
import Travel from './Components/Travel'
import Favorites from './Components/Favorites'
import About from './Components/About'

function App() {

  return (
    <BrowserRouter>
    <div className='main-wrapper'>
      <Navbar/>
      <Routes>
        <Route path='/Home' element= {<Home/>}/>
        <Route path='/Wallpeper' element= {<Wallpeper/>}/>
        <Route path='/Nature' element= {<Nature/>}/>
        <Route path='/Travel' element= {<Travel/>}/>
        <Route path='/Renders' element= {<Renders/>}/>
        <Route path='/Interiors' element= {<Interiors/>}/>
        <Route path='/Favorites' element= {<Favorites/>}/>
      </Routes>
      <About/>
    </div>
    </BrowserRouter>
  )
}

export default App
