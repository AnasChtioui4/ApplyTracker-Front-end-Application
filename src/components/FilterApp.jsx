import React from "react";
import { useState, useRef } from "react";
import "../css/FilterApp.css";

function FilterApp() {
  const [selected, setSelected] = useState(null);
  const options = ["All", "Applied", "Interview"];

  let applys = [{}];

  return <ul className="filter-option">
    {options.map((option, index) => (
        <li key={index} onClick={()=>setSelected(index)} className={selected === index ? "option option-select" : "option"}>
            {option}
        </li>
    ))}
  </ul>;
}

export default FilterApp;
