import React from "react";

function List({ list, setList }) {
  function handleChecked(todo) {
    const updatedTodo = { ...todo, complete: !todo.complete };
    setList(list.map((item) => (item === todo ? updatedTodo : item)));
  }

  return (
    <ul>
      {list.map((todo) => (
        <li>
          <input
            type="checkbox"
            checked={todo.complete}
            onChange={() => handleChecked(todo)}
          />
          {todo.text}
        </li>
      ))}
    </ul>
  );
}

export default List;
