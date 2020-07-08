import React from "react";

function List({ list, setList }) {
  function handleChecked(todo) {
    const updatedTodo = { ...todo, complete: !todo.complete };
    setList(list.map((item) => (item === todo ? updatedTodo : item)));
  }

  function handleDelete(todo) {
    setList(list.filter((item) => item !== todo));
  }

  return (
    <ul>
      {list.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.complete}
            onChange={() => handleChecked(todo)}
          />
          {todo.text}
          <button onClick={() => handleDelete(todo)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default List;
