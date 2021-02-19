import React from "react";
import { ReactComponent as Pokeball } from "../images/pokeball.svg";

const ListItem = (props) => {
  const clickHandler = (e) => {
    console.log(e.target.closest("li"));
  };

  return (
    <li className="listItem" onClick={(e) => clickHandler(e)}>
      <Pokeball />
      <span>No{props.number}</span>
      <span>{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</span>
    </li>
  );
};

export default ListItem;
