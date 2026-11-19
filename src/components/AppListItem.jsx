import React from "react";
import "../css/AppListItem.css";

function AppListItem({ title, place, status }) {
  return (
    <li>
      <div>
        <p id="place">{place}</p>
        <span id="title">{title}</span>
        <span id="status">{status}</span>
      </div>
    </li>
  );
}

export default AppListItem;
