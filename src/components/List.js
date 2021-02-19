import React from "react";
import ListItem from "./ListItem";
import { connect } from "react-redux";
import { getNames } from "../actions";

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

  render() {
    return (
      <div className="container">
        <div className="list">
          <ul>{this.renderList()}</ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { pokemons: state.pokemons };
};

export default connect(mapStateToProps, { getNames })(List);
