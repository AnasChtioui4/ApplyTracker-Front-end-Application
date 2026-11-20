import React from "react";
import "../css/AppListItem.css";

function AppListItem({ date, title, place, status, statusIndex }) {
  return (
    <li>
      <div id="infos">
        <span id="symbol">{place[0]}</span>
        <div id="info">
          <p id="place">{place}</p>
          <span id="title">{title}</span>
          <span id="date">Added {date}</span>
        </div>
      </div>
      <div id="control">
        <span id="status">{status}</span>
        <button id="next-status">{"Next Status ->"}</button>
        <button id="dlt-btn">X</button>
      </div>
    </li>
  );
}

export default AppListItem;
