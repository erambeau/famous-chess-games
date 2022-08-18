import React from 'react'
import GameCard from '../features/GameCard'
import data from '../data/chessgames_data'


function MainContent() {

  const cards = data.map(item => {
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