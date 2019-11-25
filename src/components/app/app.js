import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import PeoplePage from "../people-page";
import ToogleReactComponent from "../toogle-random-planet";
import ErrorMessage from '../error-message';
import SwapiService from "../../services/swapi-service";
import ItemList from "../item-list";
import PersonDetails from "../person-details";

import "./app.scss";

export default class App extends Component {
  constructor() {
    super();

    this.swapi = new SwapiService();

    this.state = {
      showRandomPlanet: true,
      hasError: false,
      selectedPerson: null  
    };
  }

  toggleRandomPlanet = () => {
    this.setState(state => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      };
    });
  };

  onPersonSelected = id => {
    this.setState({
      selectedPerson: id
    });
  };


  componentDidCatch() {
    this.setState({
      hasError: true
    })
  }
  render() {
    const { showRandomPlanet, hasError, selectedPerson } = this.state;

    if (hasError) {
      return <ErrorMessage />;
    }

    const planet = showRandomPlanet ? <RandomPlanet /> : null;

    return (
      <div className="container app">
        <Header />
        {planet}

        <ToogleReactComponent toggle={this.toggleRandomPlanet} />

        <div className="main-info row">
          <PeoplePage />

          <React.Fragment>
            <div className="col-12 col-md-6">
              <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapi.getAllPlanets}
              />
            </div>
            <div className="col-12 col-md-6">
              <PersonDetails personId={selectedPerson} />
            </div>
          </React.Fragment>

          <React.Fragment>
            <div className="col-12 col-md-6">
              <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapi.getAllStarships}
              />
            </div>
            <div className="col-12 col-md-6">
              <PersonDetails personId={selectedPerson} />
            </div>
          </React.Fragment>
        </div>
      </div>
    );
  }
}