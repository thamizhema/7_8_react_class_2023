import ReactDom from "react-dom/client";
import React from "react";
import App from "./App";
import "./index.css";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);

// h1,{children:"heading"}
