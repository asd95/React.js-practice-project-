import React from "react";
import ItemDetails, { Record } from "../item-details/item-details";
import { withSwapiService } from "../hoc-helpers";
const PersonDetails = props => {
  return (
    <ItemDetails {...props}>
      <Record field="gender" label="Gender" />
      <Record field="birthYear" label="Birth Year" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  );
};

const mapMethodsToProps = swapi => {
  return {
    getData: swapi.getPerson,
    getImageUrl: swapi.getPersonImage
  };
};

export default withSwapiService(mapMethodsToProps)(PersonDetails);
