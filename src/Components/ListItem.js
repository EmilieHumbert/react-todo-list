import React from "react";
import DeleteButton from "./DeleteButton";

function ListItem({ todo, list, setList }) {
  function handleChecked(todo) {
    const updatedTodo = { ...todo, complete: !todo.complete };
    setList(list.map((item) => (item === todo ? updatedTodo : item)));
  }

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.complete}
        onChange={() => handleChecked(todo)}
      />
      {todo.text}
      <DeleteButton todo={todo} list={list} setList={setList} />
    </li>
  );
}

export default ListItem;
