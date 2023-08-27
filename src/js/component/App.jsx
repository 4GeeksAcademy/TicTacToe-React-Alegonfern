import React, { useState } from 'react';
import PlayerInput from './PlayerInput';
import Board from './Board';
import GameOver from './GameOver.jsx';
import '../../styles/index.css';

function App() {
	const [player1, setPlayer1] = useState('');
	const [player2, setPlayer2] = useState('');
	const [currentPlayer, setCurrentPlayer] = useState(player1);
	const [winner, setWinner] = useState(null);

	const handlePlayerInput = (name1, name2) => {
		setPlayer1(name1);
		setPlayer2(name2);
		setCurrentPlayer(name1);
	};

	const handleGameOver = (winnerName) => {
		setWinner(winnerName);
	};

	return (
		<div className="app">
			{!winner ? (
				player1 && player2 ? (
					<Board
						player1={player1}
						player2={player2}
						currentPlayer={currentPlayer}
						onGameOver={handleGameOver}
					/>
				) : (
					<PlayerInput onInput={handlePlayerInput} />
				)
			) : (
				<GameOver winner={winner} />
			)}
		</div>
	);
}

export default App;
