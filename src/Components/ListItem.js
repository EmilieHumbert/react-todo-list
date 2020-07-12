import React from "react";
import { Draggable } from "react-beautiful-dnd";
import {
  ListItem as MuiListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import DeleteButton from "./DeleteButton";
import Checkbox from "./Checkbox";

function ListItem({ todo, list, setList, index }) {
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
          <ListItemText>{todo.text}</ListItemText>
          <ListItemIcon>
            <DeleteButton todo={todo} list={list} setList={setList} />
          </ListItemIcon>
        </MuiListItem>
      )}
    </Draggable>
  );
}

export default ListItem;
