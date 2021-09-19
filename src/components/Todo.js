import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { toggleTodo,deleteTodo } from "../redux/actions";

const Todo = ({ todo, toggleTodo, deleteTodo }) => (
  <div className={cx(
    "single-todo",
    todo && todo.completed && "low-opacity"
  )}>
    <li className="todo-item" onClick={() => toggleTodo(todo.id)}>
      {todo && todo.completed ? <span>✔</span>  : <span>✖</span>}{" "}
      <span
        className={cx(
          "todo-item__text",
          todo && todo.completed && "todo-item__text--completed"
        )}
      >
        {todo.content}
      </span>
    </li>
    <button className="delete-todo" onClick={() => deleteTodo(todo.id)}>Delete</button>
  </div>
)


// export default Todo;
export default connect(
  null,
  { toggleTodo, deleteTodo}
)(Todo);
