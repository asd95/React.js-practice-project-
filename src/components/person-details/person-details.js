import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import PersonView from "./person-view";
import Loading from "../loading";

import "./person-details.scss";

export default class PersonDetails extends Component {
  constructor() {
    super();
    this.swapi = new SwapiService();

    this.state = {
      person: null,
      loading: false
    };
  }

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.setState({ loading: true });
      this.updatePerson();
    }
  }

  updatePerson() {
    const { personId: id } = this.props;

    if (!id) {
      return;
    }

    this.swapi.getPerson(id).then(person => {
      this.setState({
        person,
        loading: false
      });
    });
  }

  render() {
    const { person, loading } = this.state;

    if (!person) {
      return (
        <div className="alternative">
          <span>Select a person from a list</span>
        </div>
      );
    }

    const spinner = loading ? <Loading /> : null;
    const content = !loading ? <PersonView person={person} /> : null;
    return (
      <div className="person-details">
        {spinner}
        {content}
      </div>
    );
  }
}
