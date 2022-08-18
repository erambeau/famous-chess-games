import React from 'react'


function GameCard(props) {
  return (
    <div className="game-card">
      <a href={"https://www.chessgames.com/perl/chessgame?gid=" + props.chessgameid} className="game-link" target="_blank">
        <h2 className="game-title">{props.title}</h2>
        <img src={process.env.PUBLIC_URL + "/images/" + props.finalPosition} alt={props.title} className="game-image" />
        <p><strong>{props.player1} vs {props.player2}, {props.year}</strong></p>
        <p>{props.opening}, {props.nbMoves} moves, {props.score}</p>
      </a>
    </div>
  )
}

export default GameCard


