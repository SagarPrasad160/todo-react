import { useContext } from "react";

import TodoContext from "../context/TodoContext";

import TodoItem from "./TodoItem";

function TodoList() {
  const { state } = useContext(TodoContext);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-5 box-border overflow-x-auto">
      {state.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
