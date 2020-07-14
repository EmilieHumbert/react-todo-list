import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import List from "./List";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

function Project({ project, setProject }) {
  const classes = useStyles();
  const { title, list } = project;

  return (
    <div>
      <form className={classes.title} noValidate autoComplete="off">
        <Typography variant="h5" align="left" component="h2" gutterBottom>
          {title}
        </Typography>
      </form>
      <List
        list={list}
        setList={(updatedList) =>
          setProject({ ...project, list: [...updatedList] })
        }
      />
    </div>
  );
}

export default Project;
