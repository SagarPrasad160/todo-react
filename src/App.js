import React from "react";

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    <TodoProvider>
      <div className="flex flex-col h-screen justify-between">
        <Header />
        <TodoInput />
        <TodoList />
        <Footer />
      </div>
    </TodoProvider>
  );
}

export default App;
