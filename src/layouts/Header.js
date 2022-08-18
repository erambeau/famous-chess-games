import React from 'react'
import logo from "../images/pieces/Chess_qlt60.png"

function Header() {
  return (
    <nav className="nav-header">
        <div className='nav-header--title'>
            <img src={logo} className='nav-header--logo' />
            <h1>Famous chess games</h1>
        </div>
    </nav>
  )
}

export default Header