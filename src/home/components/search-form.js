import React, { Component } from "react";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.input = null;
  }

  /*
   * Otra manera (1)
   **/

  // saveInput(input) {
  //     this.input = input;
  //   }

  render() {
    return (
      <div className="form-group search-hero ">
        <div className="container">
          <div className="row">
            <div className="col d-flex justify-content-start">
              <label htmlFor="hero-name search-hero-label">
                Search your favority hero
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-11">
              <input
                type="text"
                name="hero-name"
                className="form-control search-hero-text"
                ref={input => {
                  this.input = input;
                }}
                // Otra manera de hacer lo de la línea anterior => Otra manera (1) + ref={this.saveInput.bind(this)}
              />
            </div>
            <div className="col-1">
              <button
                onClick={event => {
                  event.preventDefault();
                  console.log(this.input.value);
                }}
                className="btn btn-primary search-hero-button"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchForm;
