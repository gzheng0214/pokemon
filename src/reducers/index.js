import { combineReducers } from "redux";
import listReducer from "./listReducer";
import { pokemonIdReducer, pokemonNameReducer } from "./pokemonReducer";

export default combineReducers({
  pokemons: listReducer,
  pokemonId: pokemonIdReducer,
  pokemonName: pokemonNameReducer,
});
