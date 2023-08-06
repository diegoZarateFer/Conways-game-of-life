import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { ColorContextProvider } from "./context/color-context";
import { MouseContextProvider } from "./context/mouse-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MouseContextProvider>
    <ColorContextProvider>
      <App />
    </ColorContextProvider>
  </MouseContextProvider>
);
