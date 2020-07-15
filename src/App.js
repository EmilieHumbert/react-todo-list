import React from "react";
import Projects from "./Components/Projects";
import "./App.css";
import { Container, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
      <Container maxWidth="sm">
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
