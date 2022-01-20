import React from 'react';

const Button = ({onClick, textContent}) => {
    return (
        <button onClick={onClick} className="spin-wheel-button" alt="click this button to spin the 'Wheel'">{textContent}</button>
    )
}

export default Button;