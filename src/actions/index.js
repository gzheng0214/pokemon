import axios from "axios";

export const getNames = () => async (dispatch) => {
  const response = await axios.get("https://pokeapi.co/api/v2/pokedex/2/");
  dispatch({ type: "GET_NAMES", payload: response.data.pokemon_entries });
};
