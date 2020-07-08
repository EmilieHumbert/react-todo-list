import React from "react";

function List({ data }) {
  return (
    <ul>
      {data.map((todo) => (
        <li>{todo}</li>
      ))}
    </ul>
  );
}

export default List;
