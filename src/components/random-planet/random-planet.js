import React, { Component } from "react";
// import PropTypes from 'prop-types';

import SwapiService from "../../services/swapi-service";
import Loading from "../loading";
import PlanetView from "./planet-view";
import ErrorMessage from "../error-message";

import "./random-planet.scss";

export default class RandomPlanet extends Component {
  // static defaultProps = {
  //   updateInterval: 10000
  // };

  // static propTypes = {
  //   updateInterval: PropTypes.number
  // };

  constructor() {
    super();
    this.swapiService = new SwapiService();
    this.state = {
      planet: {},
      loading: true,
      error: false
    };

    this.onPlanetLoaded = planet => {
      this.setState({
        planet,
        loading: false
      });
    };

    this.onError = () => {
      this.setState({
        error: true,
        loading: false
      });
    };
    this.updatePlanet = () => {
      const id = Math.floor(Math.random() * 25) + 3;
      this.swapiService
        .getPlanet(id)
        .then(this.onPlanetLoaded)
        .catch(this.onError);
    };
  }

  componentDidMount() {
    // const { updateInterval } = this.props;
    this.updatePlanet();
    // this.update = setInterval(this.updatePlanet, 1000);
  }

  componentWillUnmount() {
    // clearInterval(this.update);
  }

  render() {
    const { planet, loading, error } = this.state;

    const showContent = !(loading || error);
    const errorMess = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Loading /> : null;
    const content = showContent ? <PlanetView planet={planet} /> : null;

    return (
      <div className="random-planet">
        {errorMess}
        {spinner}
        {content}
      </div>
    );
  }
}
