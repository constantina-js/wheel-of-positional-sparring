import React from 'react';

const Button = ({onClick, textContent}) => {
    return (
        <button onClick={onClick}>{textContent}</button>
    )
}

export default Button;