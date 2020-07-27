import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { List as MuiList } from "@material-ui/core";

import AddTodoForm from "../redux/containers/AddTodoForm";
import ListItem from "../redux/containers/ListItem";

function List({ list, projectId, reorderTodos }) {
  const onDragEnd = (event) => {
    reorderTodos(event);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="hello">
        {(provided) => (
          <MuiList ref={provided.innerRef} {...provided.droppableProps}>
            {list.map((id, index) => (
              <ListItem
                id={id}
                index={index}
                key={id}
                projectId={projectId}
              />
            ))}
            {provided.placeholder}
            <AddTodoForm projectId={projectId} />
          </MuiList>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default List;
