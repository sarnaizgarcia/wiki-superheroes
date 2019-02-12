import defaultState from "./default-state";

function reducer(estado, accion) {
  const newState = Object.assign({}, estado);
  if (estado) {
    switch (accion.type) {
      case "GO_TO_FIRST_PAGE":
        newState.tableHeroes.page = 0;
        return newState;
        break;
      case "GO_TO_LAST_PAGE":
        newState.tableHeroes.page = newState.tableHeroes.lastSize;
        return newState;
        break;
      case "GO_TO_NEXT_PAGE":
        if (newState.tableHeroes.page < newState.tableHeroes.lastSize) {
          newState.tableHeroes.page = newState.tableHeroes.page + 1;
        }
        return newState;
        break;
      case "GO_TO_PREV_PAGE":
        if (newState.tableHeroes.page > 0) {
          newState.tableHeroes.page = newState.tableHeroes.page - 1;
        }
        return newState;
        break;
      case "LENGTH":
        newState.tableHeroes.size = accion.payload.lenght;
        newState.tableHeroes.lastSize = Math.ceil(
          newState.dataTableHeroes.lenght / newState.tableHeroes.size
        );
        return newState;
        break;
      default:
        return estado;
    }
  } else {
    return defaultState;
  }
}

export default reducer;
