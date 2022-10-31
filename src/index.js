import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Navigation from "./components/Navigation";
import UserProfileCard from "./components/UserProfileCard";
import EducationTimeline from "./components/EducationTimeLine";
import JobsTimeline from "./components/JobsTimeLine";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <body className="h-screen	 dark:bg-gray-800">
    <React.StrictMode>
      <div className="container ">
        <Navigation />
        <UserProfileCard />
        <App />
        <div className="columns-2">
          <EducationTimeline />
          <JobsTimeline />
        </div>
      </div>
    </React.StrictMode>
  </body>
);
