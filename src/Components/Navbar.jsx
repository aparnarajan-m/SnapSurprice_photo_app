import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/camera-logo.png'
import { FaHeart } from 'react-icons/fa'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar-wrapper'>
      <div className='logo-wrapper'>
        <img className='logoImg' src={logo} alt="SnapSurprise Logo" />
        <h1 className='logoText'>SnapSurprise </h1>
      </div>
      <div className='navLink-wrapper'>
        <NavLink to= '/Home'
        className={({ isActive }) => isActive ? 'navLink active' : 'navLink'}> Home </NavLink>

        <NavLink to='/Wallpeper'
        className={({ isActive }) => isActive ? 'navLink active' : 'navLink'}> Wallpapers </NavLink>

        <NavLink to='/Renders'
        className={({ isActive }) => isActive ? 'navLink active' : 'navLink'}> 3D Renders </NavLink>

        <NavLink to='/Interiors'
        className={({ isActive }) => isActive ? 'navLink active' : 'navLink'}> Interiors </NavLink>

        <NavLink to='/Nature'
        className={({ isActive }) => isActive ? 'navLink active' : 'navLink'}> Nature </NavLink>

        <NavLink to='/Travel'
        className={({ isActive }) => isActive ? 'navLink active' : 'navLink'}> Travel </NavLink>

        <NavLink to='/Favorites'
        className={({ isActive }) => isActive ? 'navLink active' : 'navLink'}> <FaHeart style={{ color: 'red', fontSize: '16px' }}/> </NavLink>
        </div>
    </div>
  )
}

export default Navbar