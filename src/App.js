import React from "react";
import Projects from "./Components/Projects";
import "./App.css";
import { Container, Typography, Paper } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          To do:
        </Typography>
        <Paper>
          <Projects />
        </Paper>
      </Container>
    </div>
  );
}

export default App;
