import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Navigation from "./components/Navigation";
import UserProfileCard from "./components/UserProfileCard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    
    <Navigation />
    <UserProfileCard />
    <App />
  </React.StrictMode>
);
