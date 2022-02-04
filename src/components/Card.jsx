import React from 'react';
import './assets/css/Card.css';

const Card = ({ children }) => {
    return (<div className='card'>{children}</div>);
};

export default Card;
