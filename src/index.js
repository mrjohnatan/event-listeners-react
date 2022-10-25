import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App";
// import App2 from "./App2";
// import App3 from "./App3";
// import App4 from "./App4";
// import App5 from "./App5";
// import App7 from "./App7";
import App8 from "./App8";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* <App /> */}
    {/* <App2 /> */}
    {/* <App3 /> */}
    {/* <App4 /> */}
    {/* <App5 /> */}
    {/* <App6 /> */}
    {/* <App7 /> */}
    <App8 />
  </StrictMode>
);
