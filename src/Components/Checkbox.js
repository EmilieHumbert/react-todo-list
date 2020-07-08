import React from "react";

function Checkbox({ todo, setList, list }) {
  function handleChecked(todo) {
    const updatedTodo = { ...todo, complete: !todo.complete };
    setList(list.map((item) => (item === todo ? updatedTodo : item)));
  }
  return (
    <input
      type="checkbox"
      checked={todo.complete}
      onChange={() => handleChecked(todo)}
    />
  );
}

export default Checkbox;
