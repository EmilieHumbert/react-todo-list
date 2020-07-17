import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Draggable } from "react-beautiful-dnd";
import {
  ListItem as MuiListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  IconButton,
} from "@material-ui/core";
import {
  Check as CheckIcon,
  Clear as ClearIcon,
  Edit as EditIcon,
} from "@material-ui/icons";

import DeleteButton from "./DeleteButton";
import Checkbox from "./Checkbox";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    alignItems: "center",
  },
  title: {
    flexGrow: 1,
  },
}));

function ListItem({ todo, list, setList, index }) {
  const classes = useStyles();
  const [input, setInput] = useState(todo.text);
  const [editListItem, setEditListItem] = useState(false);

  const handleEditClick = () => setEditListItem(!editListItem);

  const handleEditCancel = () => {
    setEditListItem(false);
    setInput(todo.text);
  };

  const handleEditSubmit = () => {
    const updateText = input.length > 0 ? input : "[Untitled]";
    const updatedTodo = { ...todo, text: updateText };
    setEditListItem(false);
    setList(list.map((item) => (item === todo ? updatedTodo : item)));
    if (input.length === 0) {
      setInput(updateText);
    }
  };

  const handleListItemChange = (e) => setInput(e.target.value);

  return (
    <Draggable draggableId={todo.id} index={index}>
      {(provided) => (
        <MuiListItem
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <ListItemIcon>
            <Checkbox todo={todo} list={list} setList={setList} />
          </ListItemIcon>

          {editListItem ? (
            <ListItemText className={classes.header} disableTypography>
              <TextField
                className={classes.title}
                placeholder="[Untitled]"
                value={input}
                onChange={handleListItemChange}
                onKeyPress={(e) => e.key === "Enter" && handleEditSubmit()}
              />
            </ListItemText>
          ) : (
            <ListItemText>{todo.text}</ListItemText>
          )}
          <ListItemIcon>
            {editListItem ? (
              <>
                <IconButton onClick={handleEditSubmit}>
                  <CheckIcon color="primary" />
                </IconButton>
                <IconButton onClick={handleEditCancel}>
                  <ClearIcon color="error" />
                </IconButton>
              </>
            ) : (
              <IconButton onClick={handleEditClick}>
                <EditIcon color="primary" fontSize="small" />
              </IconButton>
            )}
            <DeleteButton todo={todo} list={list} setList={setList} />
          </ListItemIcon>
        </MuiListItem>
      )}
    </Draggable>
  );
}

export default ListItem;
