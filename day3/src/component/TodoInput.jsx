import { useState } from "react";

export const TodoInput = ({ addTodo }) => {
  const [text, setText] = useState("");
  return (
    <div>
      {text}
      <input
        type="text"
        onChange={(e) => {
          //  console.log("value",e.target.value);
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          addTodo(text);
        }}
      >
        Add Todo
      </button>
    </div>
  );
};
