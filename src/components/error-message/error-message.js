import React from 'react';
import icon from './death-star.png';

import './error-message.scss';

const ErrorMrssage = () => {
    return (
        <div className='error-message'>            
        <img src={icon} alt=""/>
        <h1>Ups!</h1>
        <span>Something wrong</span>
        <span>droids will fix it</span>
        </div>
    );
}

export default ErrorMrssage;
