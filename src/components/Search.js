import React, { Component } from "react";
import axios from "axios";

class Search extends Component {
  state = {
    searchTerm: null,
    results: []
  };

  handleInput = e => {
    this.setState({
      searchTerm: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const url = `https://itunes.apple.com/search?term=${
      this.state.searchTerm
    }&limit=25`;

    axios
      .get(url)
      .then(res => this.props.getResults(res.data.results))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div id="search">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="search"
            autoFocus
            onInput={this.handleInput}
          />
          <button type="submit" className="btn btn-success mt-3">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
