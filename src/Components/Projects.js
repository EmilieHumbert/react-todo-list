import React, { useState } from "react";
import { generate as generateId } from "shortid";
import { Tabs, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AddCircleOutline as AddCircleOutlineIcon } from "@material-ui/icons";

import Project from "./Project";

// vertical tabs
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
  },
  lefttabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  tabpanel: {
    width: "100%",
  },
}));

function Projects() {
  const classes = useStyles();
  const [active, setActive] = useState(0);
  const [projects, setProjects] = useState([
    {
      id: generateId(),
      title: "Example Project",
      list: [{ id: generateId(), text: "Example todo" }],
    },
  ]);

  const handleChange = (event, newValue) => {
    setActive(newValue);
  };

  const handleAddProject = () => {
    const newProject = {
      id: generateId(),
      title: "New Project",
      list: [],
    };
    setProjects([...projects, newProject]);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={active}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.lefttabs}
      >
        {projects.map(({ id, title }) => (
          <Tab key={id} label={title} {...a11yProps(0)} />
        ))}
        <Tab icon={<AddCircleOutlineIcon />} onClick={handleAddProject} />
      </Tabs>
      {projects.map((project, index) => (
        <TabPanel key={project.id} value={active} index={index} className={classes.tabpanel}>
          <Project
            project={project}
            setProject={(updatedProject) =>
              setProjects(
                projects.map((project) =>
                  project.id === updatedProject.id
                    ? { ...updatedProject, list: [...updatedProject.list] }
                    : project
                )
              )
            }
          />
        </TabPanel>
      ))}
    </div>
  );
}

export default Projects;
