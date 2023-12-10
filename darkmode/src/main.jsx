import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.scss";
import { DarkModeProvider } from "./context/DarkModeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DarkModeProvider>
    <App />
  </DarkModeProvider>
);
