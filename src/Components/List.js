import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { List as MuiList } from "@material-ui/core";

import Form from "./Form";
import ListItem from "./ListItem";
import { reorderList } from "../utils/drag-drop";

function List({ list, setList }) {
  const onDragEnd = (result) => {
    reorderList(result, list, setList);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="hello">
        {(provided) => (
          <MuiList ref={provided.innerRef} {...provided.droppableProps}>
            {list.map((todo, index) => (
              <ListItem
                key={todo.id}
                todo={todo}
                list={list}
                setList={setList}
                index={index}
              />
            ))}
            {provided.placeholder}
            <Form list={list} setList={setList} />
          </MuiList>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default List;
