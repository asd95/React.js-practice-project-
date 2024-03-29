import React from "react";
import { Redirect } from "react-router-dom";
import './page-style.scss';
const SecretPage = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return (
      <div className="jumbotron">
        <h3>This page is full of secrets!!!</h3>
      </div>
    );
  }

  return <Redirect to="/login" />;
};

export default SecretPage;
