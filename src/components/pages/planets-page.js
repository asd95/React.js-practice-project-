import React, { Component } from "react";
import ErrorBoundry from "../error-boundry";
import Row from "../row";
import { PlanetList, PlanetDetails } from "../sw-components";

export default class PlanetsPage extends Component {
  constructor() {
    super();
    this.state = {
      selectedItem: null
    };
  }

  onPlanetSelected = id => {
    this.setState({
      selectedItem: id
    });
  };

  render() {
    const { selectedItem } = this.state;

    return (
      <ErrorBoundry>
        <Row
          left={<PlanetList onItemSelected={this.onPlanetSelected} />}
          right={<PlanetDetails itemId={selectedItem} />}
        />
      </ErrorBoundry>
    );
  }
}
