import React, { Component } from "react";
import AppHeader from "./components/AppHeader";
import Search from "./components/Search";
import Card from "./components/Card";

class App extends Component {
  state = {
    results: [],
    resultLen: null
  };

  getResults = results => {
    if (results.length === 0) {
      this.setState({
        resultLen: 0
      });
    } else {
      this.setState({
        resultLen: null
      });
    }

    this.setState({
      results
    });
  };

  render() {
    return (
      <div id="search-app" className="bg-light">
        <AppHeader />
        <div className="container">
          <Search getResults={this.getResults} />
          <Card results={this.state.results} />
          {this.state.resultLen === 0 && (
            <h4 className="text-center alert alert-danger m-5">
              Sorry No Results !
            </h4>
          )}
        </div>
      </div>
    );
  }
}

export default App;
