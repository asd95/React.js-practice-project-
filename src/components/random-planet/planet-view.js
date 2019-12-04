import React from "react";
import "./random-planet.scss";

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;

  return (
    <React.Fragment>
      <div className="planet-image">
        <img
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          alt="Img"
        />
      </div>
      <div className="planet-desc">
        <h1 className="planet-desc__title">{name}</h1>
        <ul className="planet-desc__list">
          <li className="planet-desc__list-item">Population {population}</li>
          <li className="planet-desc__list-item">
            Rotation Period {rotationPeriod}
          </li>
          <li className="planet-desc__list-item">Diameter {diameter}</li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default PlanetView;
