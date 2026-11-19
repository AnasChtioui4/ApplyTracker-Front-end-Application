import React from "react";
import "../css/AppListItem.css";

function AppListItem({title, place, status}) {
  return <li>
    <div>
        <p id="place">{place}</p>
        <span id="role">{role}</span>
    </div>
  </li>;
}

export default AppListItem;
