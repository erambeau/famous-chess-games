import React from 'react'

function Header() {
  return (
    <nav className="nav-header">
        <div className='nav-header--title'>
            <img src={process.env.PUBLIC_URL+"/images/pieces/Chess_qlt60.png"} className='nav-header--logo' />
            <h1>Famous chess games</h1>
        </div>
    </nav>
  )
}

export default Header