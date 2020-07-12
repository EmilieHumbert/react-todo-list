import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { List as MuiList, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Form from "./Form";
import ListItem from "./ListItem";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

function List({ list, setList }) {
  const classes = useStyles();

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    // do nothing when dragging outside container
    if (!destination) {
      return;
    }

    // do nothing if item doesn't move
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // find element in array that has same id as element dragged
    const movedItem = list.find((item) => item.id === draggableId);
    // remove the moved item from the list array
    const otherItems = list.filter((item) => item !== movedItem);

    // update the array
    setList([
      // add items from 0 to moved item new index in new array
      ...otherItems.slice(0, destination.index),
      // add moveItem to the new array
      movedItem,
      // add remaining items from new index onwards
      ...otherItems.slice(destination.index),
    ]);
  };

  return (
    <Paper className={classes.root}>
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
    </Paper>
  );
}

export default List;
