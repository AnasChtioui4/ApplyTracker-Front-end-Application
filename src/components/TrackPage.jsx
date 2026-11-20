import { useState } from "react";
import "../css/TrackPage.css";
import AppListItem from "./AppListItem";

function TrackPage() {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [select, setSelect] = useState(1);
  const [search, setSearch] = useState("");
  const [index, setIndex] = useState(0);

  const [appList, setAppList] = useState([]);

  const statusOptions = ["Wishlist", "Applied", "Interview", "Offers", "Rejected"];

  const fiterOptions = [
    { id: 1, name: "All", count: appList.length },
    { id: 2, name: "Wishlist", count: appList.filter((app) => app.status === "Wishlist").length },
    { id: 3, name: "Applied", count: appList.filter((app) => app.status === "Applied").length },
    { id: 4, name: "Interviews", count: appList.filter((app) => app.status === "Interviews").length},
    { id: 5, name: "Offers", count: appList.filter((app) => app.status === "Offers").length },
    { id: 6, name: "Rejected", count: appList.filter((app) => app.status === "Rejected").length },
  ];

  function handleSubmit(e) {
    e.preventDefault();
    setAppList([...appList, {id: Date.now(), place: company, title: role, status: statusOptions[index] }]);
    setRole(""); setCompany("");
  }

  return (
    <main>
      <form onSubmit={(e) => handleSubmit(e)} className="add-apply">
        <input
          type="text"
          placeholder="Company / School"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="add-input"
          required
        />
        <input
          type="text"
          placeholder="Role / Program"
          className="add-input"
          onChange={(e) => setRole(e.target.value)}
          value={role}
          required
        />
        <button className="add-btn">+ Add</button>
      </form>
      <div className="search-filter">
        <div className="filter">
          {fiterOptions.map((option) => {
            return (
              <span
                key={option.id}
                className={select === option.id && "selected"}
                onClick={() => setSelect(option.id)}
              >
                {option.name + ` (${option.count})`}
              </span>
            );
          })}
        </div>
        <input
          type="text"
          id="search"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <ul className="app-list">
        {appList.map((app) => {
          const dateTime = new Date(app.id);
          return <AppListItem key={app.id} place={app.place} title={app.title} status={app.status} date={`${dateTime.toLocaleString("en-Us", {month: "short"})} ${dateTime.getDate()}`} />;
        })}
      </ul>
    </main>
  );
}

export default TrackPage;
