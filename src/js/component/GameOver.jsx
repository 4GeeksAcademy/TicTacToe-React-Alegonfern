import React from 'react';
import '../../styles/index.css';

function GameOver({ winner }) {
    return (
        <div className="game-over">
            {winner === 'draw' ? (
                <h2>Empate</h2>
            ) : (
                <h2>{`Ganador: ${winner}`}</h2>
            )}
        </div>
    );
}

export default GameOver;
