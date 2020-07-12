import React from "react";
import { IconButton } from "@material-ui/core";
import { Delete as DeleteIcon } from "@material-ui/icons";

function DeleteButton({ todo, setList, list }) {
  function handleDelete(todo) {
    setList(list.filter((item) => item !== todo));
  }
  return (
    <IconButton onClick={() => handleDelete(todo)}>
      <DeleteIcon />
    </IconButton>
  );
}

export default DeleteButton;
