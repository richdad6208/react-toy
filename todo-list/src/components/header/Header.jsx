import styles from "./Header.module.scss";
import { HiSun, HiMoon } from "react-icons/hi";
import cs from "classnames/bind";
import { useDarkMode } from "../../context/DarkModeContext";
const cx = cs.bind(styles);

export default function Header({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <header className={cx("header")}>
      <button onClick={toggleDarkMode} className={cx("toggle")}>
        {darkMode && <HiMoon />}
        {!darkMode && <HiSun />}
      </button>
      <ul className={cx("filters")}>
        {filters.map((f, index) => (
          <li key={index}>
            <button
              className={cx("filter", filter === f ? "selected" : "")}
              onClick={() => onFilterChange(f)}
            >
              {f}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
