import React from "react";
import ListItem from "./ListItem";

function List({ list, setList }) {
  return (
    <ul>
      {list.map((todo) => (
        <ListItem todo={todo} list={list} setList={setList} key={todo.id}/>
      ))}
    </ul>
  );
}

export default List;
