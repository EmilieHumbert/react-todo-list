import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import DeleteButton from "../Components/DeleteButton";
import List from "./List";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

function Project({ project, setProject, projects, setProjects, setActive }) {
  const classes = useStyles();
  const { title, list } = project;

  return (
    <div>
      <form className={classes.title} noValidate autoComplete="off">
        <div>
          {title}
          <DeleteButton todo={project} list={projects} setList={setProjects} setActive={setActive} />
        </div>
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
