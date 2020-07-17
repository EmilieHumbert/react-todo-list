import React, { useState } from "react";
import { generate as generateId } from "shortid";
import { Tabs, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AddCircleOutline as AddCircleOutlineIcon } from "@material-ui/icons";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { reorderList } from "../utils/drag-drop";

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

  const handleTabClick = (newValue) => {
    setActive(newValue);
  };

  const handleAddProject = () => {
    const newProject = {
      id: generateId(),
      title: "New Project",
      list: [],
    };
    setProjects([...projects, newProject]);
    setActive(projects.length);
  };

  // drag & drop
  const onDragEnd = (result) => {
    reorderList(result, projects, setProjects);
    // if active tab dragged then activate new index
    if (active === result.source.index) {
      setActive(result.destination.index);
    }
  };

  return (
    <div className={classes.root}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="abc">
          {(provided) => (
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={active}
              aria-label="Vertical tabs example"
              className={classes.lefttabs}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {projects.map(({ id, title }, index) => (
                <Draggable key={id} draggableId={id} index={index}>
                  {(provided) => (
                    <Tab
                      component="div"
                      label={title}
                      {...a11yProps(index)}
                      onClick={() => handleTabClick(index)}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
              <Tab
                component="div"
                icon={<AddCircleOutlineIcon color="primary" />}
                onClick={handleAddProject}
              />
            </Tabs>
          )}
        </Droppable>
      </DragDropContext>
      {projects.map((project, index) => (
        <TabPanel
          key={project.id}
          value={active}
          index={index}
          className={classes.tabpanel}
        >
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
            projects={projects}
            setProjects={setProjects}
            setActive={setActive}
          />
        </TabPanel>
      ))}
    </div>
  );
}

export default Projects;
