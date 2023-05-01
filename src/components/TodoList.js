import { useContext } from "react";

import TodoContext from "../context/TodoContext";

function TodoList() {
  const { state } = useContext(TodoContext);
  return (
    <div>
      {state.todos.map((todo) => (
        <div key={todo.id}>{todo.text}</div>
      ))}
    </div>
  );
}

export default TodoList;
