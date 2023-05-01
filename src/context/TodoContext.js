import { createContext, useReducer } from "react";

const TodoContext = createContext();

const TodoReducer = (state, action) => {
  switch (action.type) {
    case "todos/addTodo":
      return {
        todos: [...state.todos, action.payload],
      };
    case "todos/removeTodo": {
      const todoToRemove = action.payload;
      const updatedTodo = state.todos.filter(
        (todo) => todo.id !== todoToRemove.id
      );
      return {
        todos: updatedTodo,
      };
    }
    default:
      return state;
  }
};

export const TodoProvider = ({ children }) => {
  const initialState = {
    todos: [
      {
        id: 1,
        text: "Make Coffee",
      },
      {
        id: 2,
        text: "Water Plants",
      },
    ],
  };

  const [state, dispatch] = useReducer(TodoReducer, initialState);

  const addTodo = (newTodo) => {
    dispatch({
      type: "todos/addTodo",
      payload: newTodo,
    });
  };

  const removeTodo = (todoToRemove) => {
    dispatch({
      type: "todos/removeTodo",
      payload: todoToRemove,
    });
  };

  return (
    <TodoContext.Provider value={{ state, addTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
