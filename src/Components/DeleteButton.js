import React from "react";

function DeleteButton({ todo, setList, list }) {
  function handleDelete(todo) {
    setList(list.filter((item) => item !== todo));
  }
  return <button onClick={() => handleDelete(todo)}>Delete</button>;
}

export default DeleteButton;
