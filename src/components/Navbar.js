import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
      <NavLink to={'/movies-hub'} style={{ 'textDecoration': 'none', 'color': 'white' }}><h1>MOODIFY</h1></NavLink>
      <ul>
        <NavLink to={'/movies-hub'} style={{ 'textDecoration': 'none', 'color': 'white' }}>Home</NavLink>
        <NavLink to={'/movies'} style={{ 'textDecoration': 'none', 'color': 'white' }}>Movies</NavLink>
        <NavLink to={'/tv'} style={{ 'textDecoration': 'none', 'color': 'white' }}>TV Shows</NavLink>
      </ul>
    </div>
  )
}

export default Navbar