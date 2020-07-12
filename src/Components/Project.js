import React, { useState } from "react";
import { generate as generateId } from "shortid";
import List from "./List";
import { Container, Typography } from "@material-ui/core";

function Project() {
  const [list, setList] = useState([
    { id: generateId(), text: "Example todo", complete: false },
  ]);

  return (
    <Container maxWidth="sm">
      <Typography variant="h2" component="h1" gutterBottom>
        To do:
      </Typography>
      <List list={list} setList={setList} />
    </Container>
  );
}

export default Project;
