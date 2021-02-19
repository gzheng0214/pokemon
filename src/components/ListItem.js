import React from "react";
import { ReactComponent as Pokeball } from "../images/pokeball.svg";

const ListItem = (props) => {
  return (
    <li className="listItem">
      <Pokeball />
      <span>No{props.number}</span>
      <span>{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</span>
    </li>
  );
};

export default ListItem;
