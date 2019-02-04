import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <span className="navbar-brand text-light">{this.props.titulo}</span>
        <span className="material-icons ml-auto">{this.props.icono}</span>
      </nav>
    );
  }
}

export default Header;
