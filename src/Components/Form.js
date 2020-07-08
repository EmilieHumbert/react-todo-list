import React, { useState } from "react";
import { generate as generateId } from "shortid";

function Form({ list, setList }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.length > 0) {
      setList([...list, { id: generateId(), text: input, complete: false }]);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="description"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <input type="submit" value="submit" />
    </form>
  );
}

export default Form;
