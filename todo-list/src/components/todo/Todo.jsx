import styles from "./Todo.module.scss";
import cs from "classnames/bind";
import { FaTrashAlt } from "react-icons/fa";
const cx = cs.bind(styles);

export default function Todo({ onDelete, onUpdate, todo }) {
  const { text, status, id } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status });
  };
  const handleDelete = () => onDelete(todo);
  return (
    <li className={cx("todo")}>
      <input
        className={cx("checkbox")}
        type="checkbox"
        id={id}
        onChange={handleChange}
        checked={status === "completed"}
      />
      <label className={cx("text")} htmlFor={id}>
        {text}
      </label>
      <span className={cx("icon")}>
        <button className={cx("button")} onClick={handleDelete}>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
}
