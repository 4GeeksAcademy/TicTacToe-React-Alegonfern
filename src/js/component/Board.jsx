import React, { useState } from 'react';
import Cell from './Cell';

function Board({ player1, player2, currentPlayer, onGameOver }) {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [turn, setTurn] = useState(0);

    const handleClick = (index) => {
        if (board[index] === null && !calculateWinner(board)) {
            const newBoard = [...board];
            newBoard[index] = currentPlayer;
            setBoard(newBoard);

            const nextPlayer = currentPlayer === player1 ? player2 : player1;
            setCurrentPlayer(nextPlayer);

            setTurn(turn + 1);

            const winner = calculateWinner(newBoard);
            if (winner) {
                onGameOver(winner);
            } else if (turn === 8) {
                onGameOver('draw');
            }
        }
    };

    const renderCell = (index) => {
        return (
            <Cell value={board[index]} onClick={() => handleClick(index)} />
        );
    };

    return (
        <div className="board">
            <div className="status">
                {winner ? `Ganador: ${winner}` : `Turno de: ${currentPlayer}`}
            </div>
            <div className="board-row">
                {renderCell(0)}
                {renderCell(1)}
                {renderCell(2)}
            </div>
            <div className="board-row">
                {renderCell(3)}
                {renderCell(4)}
                {renderCell(5)}
            </div>
            <div className="board-row">
                {renderCell(6)}
                {renderCell(7)}
                {renderCell(8)}
            </div>
        </div>
    );
}

export default Board;
