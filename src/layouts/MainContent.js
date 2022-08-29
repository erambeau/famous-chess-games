import React from 'react'
import GameCard from '../features/GameCard'
import chessGames from '../data/chessgames_data'


function MainContent() {

  const cards = chessGames.slice(0, 10).map(item => {
    return (
      <GameCard 
                key={item.chessgameid}
                {...item}
      />
    )
  })

  return (
    <div className="main-part">
      {cards}
    </div>
  )
}

export default MainContent