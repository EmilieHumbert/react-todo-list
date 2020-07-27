import React from "react";
import { IconButton } from "@material-ui/core";
import { Delete as DeleteIcon } from "@material-ui/icons";

function DeleteButton({ handleDelete }) {
  return (
    <IconButton onClick={handleDelete}>
      <DeleteIcon />
    </IconButton>
  );
}

export default DeleteButton;
