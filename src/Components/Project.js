import React, { useState } from "react";
import List from "./List";

function Project() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, input]);
    setInput("");
  };

  return (
    <div>
      <h2>To do:</h2>
      <List data={list} />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="description"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default Project;
