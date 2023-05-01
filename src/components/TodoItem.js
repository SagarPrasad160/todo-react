import { useContext } from "react";

import TodoContext from "../context/TodoContext";

function TodoItem({ todo }) {
  const { removeTodo } = useContext(TodoContext);

  return (
    <div className="flex justify-between max-w-xs whitespace-normal bg-blue-300 p-2 border m-2 rounded">
      <p className="text-xl break-words">{todo.text}</p>
      <button className="btn" onClick={() => removeTodo(todo)}>
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
