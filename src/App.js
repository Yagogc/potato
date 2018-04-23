import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import fontawesome from "@fortawesome/fontawesome";
import faExternalLinkAlt from "@fortawesome/fontawesome-free-solid/faExternalLinkAlt";
import faChevronLeft from "@fortawesome/fontawesome-free-solid/faChevronLeft";
import faTags from "@fortawesome/fontawesome-free-solid/faTags";

import fetchJsonp from "fetch-jsonp";
import Header from "./components/Header";
import Home from "./pages/Home";
import Single from "./pages/Single";
import NotFound from "./pages/NotFound";

fontawesome.library.add(faExternalLinkAlt, faChevronLeft, faTags);
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
          <Switch>
            <Route
              exact
              path="/"
              component={props => <Home items={items} {...props} />}
            />
            <Route
              path="/photo/:id"
              component={props => <Single items={items} {...props} />}
            />
            <Route path="*" component={NotFound} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
