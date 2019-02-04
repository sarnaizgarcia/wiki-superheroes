import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      length: [
        {
          id: 0,
          longitud: 5
        },
        {
          id: 1,
          longitud: 10
        },
        {
          id: 2,
          longitud: 15
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <footer className="footer bg-dark">
          <div className="container">
            <div className="row">
              <div className="col align-self-center">
                <span
                  className="material-icons page-button"
                  onClick={event => {
                    event.preventDefault();
                    console.log(this.props.fpage);
                  }}
                >
                  {this.props.fpage}
                </span>
              </div>
              <div className="col align-self-center">
                <span
                  className="material-icons page-button"
                  onClick={event => {
                    event.preventDefault();
                    console.log(this.props.chevleft);
                  }}
                >
                  {this.props.chevleft}
                </span>
              </div>
              <div className="col align-self-center">
                <span className="input-group py-2">
                  <select
                    onChange={event => {
                      event.preventDefault();
                      console.log(event.target.value);
                    }}
                    className="custom-select"
                    id="inputGroupSelect02"
                  >
                    {this.state.length.map(largo => {
                      return (
                        <option value={largo.longitud} key={largo.id}>
                          {largo.longitud}
                        </option>
                      );
                    })}
                  </select>
                </span>
              </div>
              <div className="col align-self-center">
                <span
                  className="material-icons page-button"
                  onClick={event => {
                    event.preventDefault();
                    console.log(this.props.chevright);
                  }}
                >
                  {this.props.chevright}
                </span>
              </div>
              <div className="col align-self-center">
                <span
                  className="material-icons page-button"
                  onClick={event => {
                    event.preventDefault();
                    console.log(this.props.lpage);
                  }}
                >
                  {this.props.lpage}
                </span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;

{
  /* <nav className="navbar navbar-expand-lg navbar-light bg-dark">
<span className="navbar-brand text-light">{this.props.titulo}</span>
<span className="material-icons ml-auto">{this.props.icono}</span>
</nav> */
}
