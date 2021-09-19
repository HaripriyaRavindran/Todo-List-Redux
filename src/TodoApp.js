import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";
import Card from "./components/login/Card";
import "./styles.css";

export default function TodoApp() {
  return (
    <section className="flex">  
      <div className= "dashboard">
        <AddTodo />
        <VisibilityFilters />
      </div>
      <Card className="todo-app">
        <TodoList />
      </Card>
    </section>
  );
}
