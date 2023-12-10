import React from "react";
import styles from "./TodoList.module.scss";
import cs from "classnames/bind";

import { v4 as uuidv4 } from "uuid";
import TodoAdd from "../TodoAdd/TodoAdd";
import Todo from "../todo/Todo";

const cx = cs.bind(styles);
export default function TodoList({ filter }) {
  const [todos, setTodos] = React.useState(() => readTodos());

  function handleAdd(text) {
    setTodos([...todos, { id: uuidv4(), text, status: "active" }]);
  }
  const handleUpdated = (updated) =>
    setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)));
  const handleDelete = (deleted) => {
    setTodos(todos.filter((todo) => deleted.id !== todo.id));
  };
  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const filtered = filterTodos(todos, filter);

  return (
    <section className={cx("container")}>
      <ul className={cx("list")}>
        {filtered.map((todo) => (
          <Todo
            key={todo.id}
            onDelete={handleDelete}
            onUpdate={handleUpdated}
            todo={todo}
          />
        ))}
      </ul>
      <TodoAdd onAdd={handleAdd} />
    </section>
  );
}
const readTodos = () => {
  console.log("hi");
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
};
const filterTodos = (todos, filter) => {
  console.log(filter);
  if (filter === "all") return todos;
  return todos.filter((item) => item.status === filter);
};
