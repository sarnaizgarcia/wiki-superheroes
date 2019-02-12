import React, { Component } from "react";
import Table from "../components/table";
import { actionGoToFirstPage } from "../../actions/go-to-first-page";
import { actionGoToLastPage } from "../../actions/go-to-last-page";
import { actionGoToNextPage } from "../../actions/go-to-next-page";
import { actionGoToPrevPage } from "../../actions/go-to-prev-page";
import { actionLengthSelect } from "../../actions/length-select";
import { actionSearchHero } from "../../actions/search-hero";
import { aselectHero } from "../../actions/select-hero";
import { connect } from "react-redux";

const reduxFactory = connect(
  selectorHeroesTable,
  dispatchersTableHeroes
);

class HeroesTable extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return <Table />;
  }
}

function selectorHeroesTable(store) {
  const start = store.tableHeroes.size * store.tableHeroes.page;
  const end = start + store.tableHeroes.size;
  return {
    newSize: store.tableHeroes.size,
    newColumns: store.tableHeroes.columns,
    newHeroes: store.dataTableHeroes.slice(start, end)
  };
}

function dispatchersTableHeroes(dispatcher) {
  return {
    goToFirstPage: () => dispatcher(actionGoToFirstPage()),
    goToLastPage: () => dispatcher(actionGoToLastPage()),
    goToNextPage: () => dispatcher(actionGoToNextPage()),
    goToPrevPage: () => dispatcher(actionGoToPrevPage()),
    lengthSelect: lengthSelected =>
      dispatcher(actionLengthSelect(lengthSelected)),
    searchHero: heroName => dispatcher(actionSearchHero(heroName)),
    selectHero: heroId => dispatcher(aselectHero(heroId))
  };
}

export default reduxFactory(HeroesTable);
