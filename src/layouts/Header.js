import React from 'react'

function Header() {
  return (
    <nav className="nav-header">
        <div className='nav-header--title'>
            
            <h1>Famous chess games</h1>
        </div>
        <div className='nav-header--credits'>
          <p>Based on a compilation of Timothy Glenn Forney you can retrieve here : <a href="https://www.chessgames.com/perl/chesscollection?cid=1001601" target="_blank" rel="noreferrer">https://www.chessgames.com/perl/chesscollection?cid=1001601</a></p>
          <p>I parsed the data, made screenshots of final positions and pushed the first 10 games for purposes of React training.</p>
        </div>
    </nav>
  )
}

export default Header