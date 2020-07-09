import React from "react";
import { Draggable } from "react-beautiful-dnd";
import DeleteButton from "./DeleteButton";
import Checkbox from "./Checkbox";

function ListItem({ todo, list, setList, index }) {
  return (
    <Draggable draggableId={todo.id} index={index}>
      {(provided) => (
        <li
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Checkbox todo={todo} list={list} setList={setList} />
          {todo.text}
          <DeleteButton todo={todo} list={list} setList={setList} />
        </li>
      )}
    </Draggable>
  );
}

export default ListItem;
