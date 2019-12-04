import React from "react";
import ItemDetails, { Record } from "../item-details/item-details";
import { withSwapiService } from "../hoc-helpers";

const StarshipDetails = props => {
  return (
    <ItemDetails {...props}>
      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="crew" label="Сrew" />
    </ItemDetails>
  );
};

const mapMethodsToProps = swapi => {
  return {
    getData: swapi.getStarship,
    getImageUrl: swapi.getStarshipImage
  };
};

export default withSwapiService(mapMethodsToProps)(StarshipDetails);
