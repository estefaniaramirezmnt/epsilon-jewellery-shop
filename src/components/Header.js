import React from 'react'
// import logo from './public/epsilon-logo-black.png'
import logo from '../img/epsilon-logo-black.png'

export default function Header() {
  return (
    <div className="header">
        <img src={logo} alt="Epsilon Logo" className='header-logo'/>
    </div>
  )
}

