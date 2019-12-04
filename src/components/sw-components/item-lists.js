import ItemList from "../item-list";
import {
  withData,
  withSwapiService,
  compose,
  withChildFunction
} from "../hoc-helpers";

const mapPersonMethodsToProps = swapi => {
  return {
    getData: swapi.getAllPeople
  };
};
const PersonList = compose(
  withSwapiService(mapPersonMethodsToProps),
  withData,
  withChildFunction(({ name }) => `${name}`)
)(ItemList);

const mapPlanetMethodsToProps = swapi => {
  return {
    getData: swapi.getAllPlanets
  };
};
const PlanetList = compose(
  withSwapiService(mapPlanetMethodsToProps),
  withData,
  withChildFunction(({ name }) => `${name}`)
)(ItemList);

const mapStarshipMethodsToProps = swapi => {
  return {
    getData: swapi.getAllStarships
  };
};
const StarshipList = compose(
  withSwapiService(mapStarshipMethodsToProps),
  withData,
  withChildFunction(({ name }) => `${name}`)
)(ItemList);

export { PersonList, PlanetList, StarshipList };
