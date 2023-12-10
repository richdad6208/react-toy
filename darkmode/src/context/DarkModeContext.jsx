import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => readDarkMode());
  function toggleDarkMode() {
    setDarkMode(!darkMode);
    updateDarkMode(!darkMode);
  }
  useEffect(() => {
    const isDarkMode =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(isDarkMode);
    updateDarkMode(isDarkMode);
  }, []);
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
function readDarkMode() {
  return localStorage.getItem("theme") === "dark";
}
function updateDarkMode(darkMode) {
  if (darkMode) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}
export const useDarkMode = () => useContext(DarkModeContext);
