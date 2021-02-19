import React from "react";
import ListItem from "./ListItem";
import { connect } from "react-redux";
import { getNames, getPokemonId, getPokemonName } from "../actions";
import Pokemon from "./Pokemon";

class List extends React.Component {
  componentDidMount() {
    this.props.getNames();
  }

  renderList() {
    return this.props.pokemons.map((pokemon) => {
      return (
        <ListItem
          key={pokemon.entry_number}
          number={pokemon.entry_number}
          name={pokemon.pokemon_species.name}
        />
      );
    });
  }

  clickHandler = (e) => {
    if (!e.target.closest("li")) {
      return;
    }
    const prevActive = document.getElementsByClassName("active");
    if (prevActive.length > 0) {
      prevActive[0].classList.toggle("active");
    }
    e.target.closest("li").classList.toggle("active");
    const pokemonId = e.target
      .closest("li")
      .getElementsByTagName("span")[0]
      .innerText.slice(2);
    const pokemonName = e.target.closest("li").getElementsByTagName("span")[1]
      .innerText;
    console.log(pokemonName);
    this.props.getPokemonId(pokemonId);
    this.props.getPokemonName(pokemonName);
  };

  render() {
    return (
      <div className="container">
        <div className="container__image">
          <Pokemon />
        </div>
        <div className="list" onClick={this.clickHandler}>
          <ul>{this.renderList()}</ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { pokemons: state.pokemons };
};

export default connect(mapStateToProps, {
  getNames,
  getPokemonId,
  getPokemonName,
})(List);
