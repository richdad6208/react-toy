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
      <header className="wrapper">
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
      <main className="wrapper">
        <section ref={content1Ref}>
          <h2>다크모드에 대해서</h2>
          <p>다크모드는 밝은 화면 대신 어두운 배경화면을 제공하는 것이다. </p>
          <p>
            즉 우리가 사용하는 디지털 기기의 화면에서 작동하는 프로그램의
            인터페이스에 대한
          </p>
          <p>어두운 배경이라는 옵션을 하나 더 제공하는 설정이다</p>
        </section>
        <section ref={content2Ref}>
          <h2>구현방법은?</h2>
          <p>React Context api로 다크모드를 boolean값으로 저장하였습니다.</p>
          <p>그리고 boolean값이 true일 때, html에 class를 dark로 주었습니다.</p>
          <p>html class에 따라 :root color 변수를 변경하기 위함입니다.</p>
          <p>
            localStorage에 다크모드 여부를 저장하여, 사용자가 브라우저를 떠나
            다시 돌아오더라도 유지하게 하였습니다.
          </p>
        </section>
      </main>
    </>
  );
}

export default App;
