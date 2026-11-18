import React from "react";
import { useState, useRef } from "react";
import "../css/AddTask.css";

function AddTask() {
  return (
    <div className="search">
      <input type="text" id="input-app" />
      <button id="add-btn">Add</button>
    </div>
  );
}

export default AddTask;
