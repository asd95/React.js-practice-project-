import React from 'react';
import './header.scss';

const Header = () => {
    return (
        <div className="header">
            <h1>Star Wars</h1>
            <ul className="menu">
                <li className="menu__item">People</li>
                <li className="menu__item">Planets</li>
                <li className="menu__item">Starships</li>
            </ul>
        </div>
    )
};

export default Header;