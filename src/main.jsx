import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Hero from "./Components/Hero/Hero.jsx";
import Auth from "./Auth/Auth.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Hero>
    <Auth />
  </Hero>
);
