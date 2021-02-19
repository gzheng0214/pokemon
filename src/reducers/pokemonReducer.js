export const pokemonIdReducer = (state = "", action) => {
  switch (action.type) {
    case "GET_ID":
      return action.payload;
    default:
      return state;
  }
};

export const pokemonNameReducer = (state = "", action) => {
  switch (action.type) {
    case "GET_NAME":
      return action.payload;
    default:
      return state;
  }
};
