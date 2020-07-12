import React from "react";
import { Checkbox as MuiCheckbox } from "@material-ui/core";

function Checkbox({ todo, setList, list }) {
  function handleChecked(todo) {
    const updatedTodo = { ...todo, complete: !todo.complete };
    setList(list.map((item) => (item === todo ? updatedTodo : item)));
  }
  return (
    <MuiCheckbox checked={todo.complete} onChange={() => handleChecked(todo)} />
  );
}

export default Checkbox;
