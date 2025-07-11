import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/camera-logo.png'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar-wrapper'>
      <div className='logo-wrapper'>
        <img className='logoImg' src={logo} alt="SnapSurprise Logo" />
        <h1 className='logoText'>SnapSurprise</h1>
      </div>
        <NavLink to= '/Home'
        className={({ isActive }) => isActive ? 'navLink active' : 'navLink'}> Home </NavLink>

        <NavLink to='/Wallpeper'
        className={({ isActive }) => isActive ? 'navLink active' : 'navLink'}> Wallpapers </NavLink>

        <NavLink to='/3D Renders'
        className={({ isActive }) => isActive ? 'navLink active' : 'navLink'}> 3D Renders </NavLink>

        <NavLink to='/Nature'
        className={({ isActive }) => isActive ? 'navLink active' : 'navLink'}> Nature </NavLink>

        <NavLink to='/Travel'
        className={({ isActive }) => isActive ? 'navLink active' : 'navLink'}> Travel </NavLink>
        
        <NavLink to='/Architecture & Interiors'
        className={({ isActive }) => isActive ? 'navLink active' : 'navLink'}> Architecture & Interiors </NavLink>
    </div>
  )
}

export default Navbar