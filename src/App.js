import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import fetchJsonp from "fetch-jsonp";
import Header from "./components/Header";
import Home from "./pages/Home";
import Photo from "./pages/Photo";
import NotFound from "./pages/NotFound";

class App extends Component {
  state = {
    items: ""
  };
  componentDidMount() {
    const self = this;
    fetchJsonp(
      "https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json",
      {
        jsonpCallbackFunction: "jsonFlickrFeed"
      }
    )
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        console.log("parsed json", json.items);
        self.setState({
          items: json.items
        });
      })
      .catch(function(ex) {
        console.log("parsing failed", ex);
      });
  }

  render() {
    const { items } = this.state;
    return (
      <Router>
        <React.Fragment>
          <Header />
          {/* <Home items={items} /> */}
          <Switch>
            <Route
              exact
              path="/"
              component={props => <Home items={items} {...props} />}
            />
            <Route
              path="/photo/:id"
              component={props => <Photo items={items} {...props} />}
            />
            <Route component={NotFound} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
