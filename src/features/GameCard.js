import React from 'react'
import image from "../images/positions/1011478.png"

function GameCard() {
  return (
    <div className="game-card">
      <a href="https://www.chessgames.com/perl/chessgame?gid=1011478" className="game-link">
        <h2>Kasparov's Immortal</h2>
        <img src={image} alt="Kasparov's Immortal" className="game-image" />
        <p><strong>Kasparov vs Topalov, 1999</strong></p>
        <p>(B07) Pirc, 44 moves, 1-0</p>
      </a>
    </div>
  )
}

export default GameCard