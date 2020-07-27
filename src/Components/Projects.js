import React, { useState } from "react";
import { Tabs, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AddCircleOutline as AddCircleOutlineIcon } from "@material-ui/icons";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import Project from "../redux/containers/Project";

// vertical tabs
function TabPanel(props) {
  const { children, active, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={index !== active}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {index === active && children}
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

function Projects({ addProject, projects, projectsOrder, reorderProjects }) {
  const classes = useStyles();

  const [active, setActive] = useState(0);

  const handleTabClick = (index) => {
    setActive(index);
  };

  // drag & drop
  const onDragEnd = (event) => {
    if (!event.destination) {
      return;
    }

    reorderProjects(event);

    // if active tab index changes then update
    if (active === event.source.index) {
      setActive(event.destination.index);
    } else if (event.source.index > active && event.destination.index <= active) {
      setActive(active + 1);
    } else if (event.source.index < active && event.destination.index >= active) {
      setActive(active - 1);
    }
  };

  const handleAddProject = () => {
    addProject();
    setActive(projectsOrder.length);
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
              {projectsOrder.map((id, index) => (
                <Draggable key={id} draggableId={id} index={index}>
                  {(provided) => (
                    <Tab
                      component="div"
                      label={projects[id].title}
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
      {projectsOrder.map((id, index) => (
        <TabPanel
          active={active}
          className={classes.tabpanel}
          index={index}
          key={id}
        >
          <Project project={projects[id]} />
        </TabPanel>
      ))}
    </div>
  );
}

export default Projects;
