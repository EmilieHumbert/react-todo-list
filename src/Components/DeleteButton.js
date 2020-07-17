import React from "react";
import { IconButton } from "@material-ui/core";
import { Delete as DeleteIcon } from "@material-ui/icons";

function DeleteButton({ todo, setList, list, setActive }) {
  function handleDelete(todo) {
    if (setActive) {
      const index = list.indexOf(todo);
      setActive(index > 1 ? index - 1 : 0);
    }
    setList(list.filter((item) => item !== todo));
  }
  return (
    <IconButton onClick={() => handleDelete(todo)}>
      <DeleteIcon />
    </IconButton>
  );
}

export default DeleteButton;
