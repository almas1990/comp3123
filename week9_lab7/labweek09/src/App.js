
import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [student] = useState({
    studentId: "101568934",
    studentName: "Almas Sultana",
    college: "George Brown College, Toronto"
  });

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="React Logo" />

      <h1>Welcome to Fullstack Development - I</h1>
      <h2>React JS Programming Week09 Lab exercise</h2>

      <h3>{student.studentId}</h3>
      <h4>{student.studentName}</h4>
      <h5>{student.college}</h5>
    </div>
  );
}

export default App;
