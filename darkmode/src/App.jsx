import { useRef } from "react";
import { useDarkMode } from "./context/DarkModeContext";
import { HiSun, HiMoon } from "react-icons/hi";
function App() {
  const content1Ref = useRef(null);
  const content2Ref = useRef(null);
  const { darkMode, toggleDarkMode } = useDarkMode();
  function onContent1Click() {
    content1Ref.current.scrollIntoView({ behavior: "smooth" });
  }
  function onContent2Click() {
    content2Ref.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <header>
        <div className="header-wrapper">
          <h1>다크모드</h1>
          <nav>
            <ul className="primary-navigation">
              <li onClick={onContent1Click}>다크모드란?</li>
              <li onClick={onContent2Click}>구현방법은?</li>
              {darkMode && (
                <li className="icon" onClick={toggleDarkMode}>
                  <HiMoon />
                </li>
              )}
              {!darkMode && (
                <li className="icon" onClick={toggleDarkMode}>
                  <HiSun />
                </li>
              )}
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section ref={content1Ref}>
          <h2>다크모드에 대해서</h2>
        </section>
        <section ref={content2Ref}>
          <h2>구현방법은?</h2>
        </section>
      </main>
    </>
  );
}

export default App;
