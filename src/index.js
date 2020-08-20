//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1> Semester 3 Courses </h1>
    <ul>
      <li> CMPE 273</li>
      <li> CMPE 220</li>
      <li> CMPE 295a</li>
    </ul>
  </div>,
  document.getElementById("root")
);
