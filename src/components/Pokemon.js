import React from "react";
import { connect } from "react-redux";

const Pokemon = (props) => {
  const image = props.pokemonId ? (
    <img
      src={`https://pokeres.bastionbot.org/images/pokemon/${props.pokemonId}.png`}
      alt={props.pokemonName}
    ></img>
  ) : null;
  return image;
};

const mapStateToProps = (state) => {
  return { pokemonId: state.pokemonId, pokemonName: state.pokemonName };
};

export default connect(mapStateToProps)(Pokemon);
