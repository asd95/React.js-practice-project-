import React, { Component } from "react";
import ErrorBoundry from "../error-boundry";
import { SwapiServiceProvider } from "../swapi-service-context";
import Header from "../header";
import RandomPlanet from "../random-planet";
import SwapiService from "../../services/swapi-service";
// import DummySwapiService from "../../services/dummy-swapi-service";
import {
  PeoplePage,
  PlanetsPage,
  StarshipsPage,
  SecretPage,
  LoginPage
} from "../pages";
import { StarshipDetails } from "../sw-components";

import "./app.scss";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      swapi: new SwapiService(),
      isLoggedIn: false
    };
  }

  // onServiceChange = () => {
  //   this.setState(({ swapi }) => {
  //     const Service =
  //       swapi instanceof SwapiService ? DummySwapiService : SwapiService;
  //     return {
  //       swapi: new Service()
  //     };
  //   });
  // };

  onLogin = () => {
    this.setState({
      isLoggedIn: true
    });
  };

  render() {
    const { isLoggedIn } = this.state;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapi}>
          <Router>
            <div className="container app">
              {/* <Header onServiceChange={this.onServiceChange} /> */}
              <Header />
              <RandomPlanet />
              <Switch>
                <Route path="/" render={() => <h2>Star Wars App</h2>} exact />
                <Route path="/people/:id?" component={PeoplePage} />
                <Route path="/planets" component={PlanetsPage} />
                <Route path="/starships" exact component={StarshipsPage} />
                <Route
                  path="/starships/:id"
                  render={({ match }) => {
                    const { id } = match.params;
                    return <StarshipDetails itemId={id} />;
                  }}
                />
                <Route
                  path="/login"
                  render={() => {
                    return (
                      <LoginPage
                        isLoggedIn={isLoggedIn}
                        onLogin={this.onLogin}
                      />
                    );
                  }}
                />
                <Route
                  path="/secret"
                  render={() => {
                    return <SecretPage isLoggedIn={isLoggedIn} />;
                  }}
                />
                {/* <Redirect  to="/"/> */}
                <Route render={() => <h2>PAGE NOT FOUND</h2>} />
              </Switch>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
