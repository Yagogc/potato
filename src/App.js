import React, { Component } from "react";

import fetchJsonp from "fetch-jsonp";
import Header from "./components/Header";
import Home from "./pages/Home";

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
    console.log("render", items);
    return (
      <React.Fragment>
        <Header />
        <Home items={items} />
      </React.Fragment>
    );
  }
}

export default App;
