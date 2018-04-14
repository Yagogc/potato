import React, { Component } from "react";

import fetchJsonp from "fetch-jsonp";
import Header from "./components/Header";
import Home from "./pages/Home";

class App extends Component {
  state = {
    items: ""
  };
  componentDidMount() {
    let items;
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
        items = json.items;
      })
      .catch(function(ex) {
        console.log("parsing failed", ex);
      });
    this.setState({
      items: items
    });
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Home items="{this.state.items}" />
      </React.Fragment>
    );
  }
}

export default App;
