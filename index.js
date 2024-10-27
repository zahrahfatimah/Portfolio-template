// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client"; // Import createRoot dari react-dom/client
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root")); // Membuat root baru
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
