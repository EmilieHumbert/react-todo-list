import React from "react";
import { Container, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Projects from "./redux/containers/Projects";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      height: "auto",
    },
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom>
          To do:
        </Typography>
        <Paper className={classes.root}>
          <Projects />
        </Paper>
      </Container>
    </div>
  );
}

export default App;
