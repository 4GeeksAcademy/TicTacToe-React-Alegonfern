import React from 'react';
import '../../styles/index.css';

function Cell({ value, onClick }) {
    return (
        <div className="cell" onClick={onClick}>
            {value}
        </div>
    );
}

export default Cell;
