import React, { Component } from "react";
import Header from "../components/header";
import SearchForm from "../components/search-form";
import Table from "../components/table";

class Home extends Component {
  render() {
    return (
      <div>
        <Header titulo="Wiki de Super Heroes" icono="home" />
        <h1>Hola, soy home</h1>
        <SearchForm />
        <Table />
      </div>
    );
  }
}

export default Home;
