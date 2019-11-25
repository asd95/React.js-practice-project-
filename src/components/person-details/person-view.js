import React from "react";
import "./person-details.scss";

const PersonView = ({ person }) => {
  const { id, name, birthYear, eyeColor, gender } = person;

  return (
    <React.Fragment>
      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        alt=""
        className="person-image"
      />
      <div className="person-desc">
        <h1 className="person-desc__title">{name}</h1>
        <ul className="person-desc__list">
          <li className="person-desc__list-item">Birth Year: {birthYear}</li>
          <li className="person-desc__list-item">Eye Color: {eyeColor}</li>
          <li className="person-desc__list-item">Gender: {gender}</li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default PersonView;
