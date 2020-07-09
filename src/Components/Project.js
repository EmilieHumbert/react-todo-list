import React, { useState } from "react";
import { generate as generateId } from "shortid";
import List from "./List";
import Form from "./Form";

function Project() {
  const [list, setList] = useState([
    { id: generateId(), text: "Example todo", complete: false },
  ]);

  return (
    <div>
      <h2>To do:</h2>
      <List list={list} setList={setList} />
      <Form list={list} setList={setList} />
    </div>
  );
}

export default Project;
