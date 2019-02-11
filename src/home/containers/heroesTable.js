import React, { Component } from "react";
import Table from "../components/table";

class HeroesTable extends Component {
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

export default HeroesTable;
