import React, { Component } from "react";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import SwapiService from "../../services/swapi-service";

export default class PeoplePage extends Component {
  constructor() {
    super();

    this.swapi = new SwapiService();
    this.state = {
      selectedPerson: 4
    };
  }

  onPersonSelected = id => {
    this.setState({
      selectedPerson: id
    });
  };

  render() {
    const { selectedPerson } = this.state;

    return (
      <React.Fragment>
        <div className="col-12 col-md-6">
          <ItemList
            onItemSelected={this.onPersonSelected}
            getData={this.swapi.getAllPeople}
          />
        </div>
        <div className="col-12 col-md-6">
          <PersonDetails personId={selectedPerson} />
        </div>
      </React.Fragment>
    );
  }
}
