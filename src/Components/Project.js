import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Check as CheckIcon,
  Clear as ClearIcon,
  Edit as EditIcon,
} from "@material-ui/icons";
import { Box, TextField, Typography, IconButton } from "@material-ui/core";

import DeleteButton from "./DeleteButton";
import List from "../redux/containers/List";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    alignItems: "center",
  },
  title: {
    flexGrow: 1,
  },
}));

function Project({ handleDelete, handleEditTitle, project }) {
  const classes = useStyles();
  const { id, title, list } = project;
  const [input, setInput] = useState(title);
  const [editTitle, setEditTitle] = useState(false);

  const handleEditClick = () => setEditTitle(!editTitle);

  const handleEditCancel = () => {
    setEditTitle(false);
    setInput(title);
  };

  const handleEditSubmit = () => {
    const updateTitle = input.length > 0 ? input : "[Untitled]";
    setEditTitle(false);
    handleEditTitle(updateTitle);
    if (input.length === 0) {
      setInput(updateTitle);
    }
  };

  const handleTitleChange = (e) => setInput(e.target.value);

  return (
    <Box>
      <Box className={classes.header} p={2}>
        {editTitle ? (
          <>
            <TextField
              label="Project title"
              className={classes.title}
              placeholder="[Untitled]"
              value={input}
              onChange={handleTitleChange}
              onKeyPress={(e) => e.key === "Enter" && handleEditSubmit()}
            />
            <IconButton onClick={handleEditSubmit}>
              <CheckIcon color="primary" />
            </IconButton>
            <IconButton onClick={handleEditCancel}>
              <ClearIcon color="error" />
            </IconButton>
          </>
        ) : (
          <>
            <Typography
              align="left"
              className={classes.title}
              component="h2"
              contentEditable={editTitle}
              variant="h4"
            >
              {title}
            </Typography>
            <IconButton onClick={handleEditClick}>
              <EditIcon color="primary" fontSize="small" />
            </IconButton>
          </>
        )}
        <DeleteButton handleDelete={handleDelete} id={project.id} />
      </Box>
      <List list={list} projectId={id} />
    </Box>
  );
}

export default Project;
