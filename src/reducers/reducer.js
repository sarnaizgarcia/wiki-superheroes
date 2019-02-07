import defaultState from "./default-state";

function reducer(estado, accion) {
  const newState = Object.assing({}, state);
  if (accion) {
    switch (accion.type) {
      case "GO_TO_FIRST_PAGE":
        newState.tableHeroes.page = 0;
        return newState;
        break;
      case "GO_TO_LAST_PAGE":
        newState.tableHeroes.page = newState.tableHeroes.lastSize; //
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
          dataTableHeroes.lenght / newState.tableHeroes.size
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
