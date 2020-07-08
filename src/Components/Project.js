import React, { useState } from "react";
import List from "./List";

function Project() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([{ text: "Example todo", complete: false }]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, { text: input, complete: false }]);
    setInput("");
  };

  return (
    <div>
      <h2>To do:</h2>
      <List list={list} setList={setList} />
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
