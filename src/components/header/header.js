import React from "react";
import { Link } from "react-router-dom";

import "./header.scss";

const Header = ({ onServiceChange }) => {
  return (
    <div className="header">
      <h1>
        <Link to="/">Star Wars</Link>
      </h1>
      <ul className="menu">
        <li className="menu__item">
          <Link to="/people/">People</Link>
        </li>
        <li className="menu__item">
          <Link to="/planets/">Planets</Link>
        </li>
        <li className="menu__item">
          <Link to="/starships/">Starships</Link>
        </li>
      </ul>
      <ul className="menu">
        <li className="login">
          <Link to="/login">Login</Link>
        </li>
        <li className="secret">
          <Link to="/secret">Secret</Link>
        </li>
      </ul>

      {/* <button className="btn btn-primary btn-sm" onClick={onServiceChange}>
        Change Service
      </button> */}
    </div>
  );
};

export default Header;
