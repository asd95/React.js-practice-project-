import React from "react";
import ItemDetails, { Record } from "../item-details/item-details";

import { withSwapiService } from "../hoc-helpers";

const PlanetDetails = props => {
  return (
    <ItemDetails {...props}>
      <Record field="name" label="Name" />
      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation Period" />
    </ItemDetails>
  );
};

const mapMethodsToProps = swapi => {
  return {
    getData: swapi.getPlanet,
    getImageUrl: swapi.getPlanetImage
  };
};

export default withSwapiService(mapMethodsToProps)(PlanetDetails);
