import React from "react";
import DeleteButton from "./DeleteButton";
import Checkbox from "./Checkbox";

function ListItem({ todo, list, setList }) {
  return (
    <li>
      <Checkbox todo={todo} list={list} setList={setList} />
      {todo.text}
      <DeleteButton todo={todo} list={list} setList={setList} />
    </li>
  );
}

export default ListItem;
