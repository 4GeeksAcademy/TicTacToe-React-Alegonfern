import React, { useState } from 'react';

function PlayerInput({ onInput }) {
    const [name1, setName1] = useState('');
    const [name2, setName2] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onInput(name1, name2);
    };

    return (
        <div className="player-input">
            <h2>Ingrese los nombres de los jugadores:</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Jugador 1"
                    value={name1}
                    onChange={(e) => setName1(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Jugador 2"
                    value={name2}
                    onChange={(e) => setName2(e.target.value)}
                    required
                />
                <button type="submit">Comenzar juego</button>
            </form>
        </div>
    );
}

export default PlayerInput;
