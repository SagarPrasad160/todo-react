import { useState, useContext } from "react";

import TodoContext from "../context/TodoContext";

import { v4 as uuidv4 } from "uuid";

function TodoInput() {
  const { addTodo } = useContext(TodoContext);

  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo({
      text,
      id: uuidv4(),
    });
    setText("");
  };

  return (
    <div className="p-2 flex flex-col sm:flex-row items-center">
      <form onSubmit={handleSubmit}>
        <div className="input-group flex-grow sm:w-auto">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-lg w-full max-w-xs"
            value={text}
            onChange={handleChange}
          />
          <button className="btn btn-lg ml-2">Add</button>
        </div>
      </form>
    </div>
  );
}

export default TodoInput;
