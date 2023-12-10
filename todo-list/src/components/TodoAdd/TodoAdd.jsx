import React from "react";
import styles from "./TodoAdd.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

export default function TodoAdd({ onAdd }) {
  const [text, setText] = React.useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim().length) return;
    onAdd(text);
    setText("");
  }
  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <>
      <form className={cx("form")} onSubmit={handleSubmit}>
        <input
          className={cx("input")}
          type="text"
          value={text}
          onChange={handleChange}
        />
        <button className={cx("button")}>Add</button>
      </form>
    </>
  );
}
