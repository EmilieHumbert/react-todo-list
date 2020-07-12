import React, { useState } from "react";
import { generate as generateId } from "shortid";
import {
  IconButton,
  InputBase,
  ListItem,
  ListItemIcon,
  Checkbox,
} from "@material-ui/core";
import { AddCircleOutline as AddCircleOutlineIcon } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  input: {
    flex: "1 1 auto",
  },
}));

function Form({ list, setList }) {
  const classes = useStyles();
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (input.length > 0) {
      setList([...list, { id: generateId(), text: input, complete: false }]);
      setInput("");
    }
  };

  return (
    <ListItem>
      <ListItemIcon>
        <Checkbox disabled={true} />
      </ListItemIcon>
      <InputBase
        className={classes.input}
        placeholder="Enter a task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
      />
      <ListItemIcon>
        <IconButton onClick={handleSubmit}>
          <AddCircleOutlineIcon />
        </IconButton>
      </ListItemIcon>
    </ListItem>
  );
}

export default Form;
