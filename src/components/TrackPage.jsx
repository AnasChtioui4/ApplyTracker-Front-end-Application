import { useState } from "react";
import "../css/TrackPage.css";
import AppListItem from "./AppListItem";

function TrackPage({
  appList,
  onAdd,
  wishlistCounter,
  appliedCounter,
  interviewsCounter,
  offersCounter,
  rejectedCounter,
  nextStatus
}) {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [select, setSelect] = useState(1);
  const [search, setSearch] = useState("");

  const fiterOptions = [
    { id: 1, name: "All", count: appList.length },
    { id: 2, name: "Wishlist", count: wishlistCounter },
    { id: 3, name: "Applied", count: appliedCounter },
    { id: 4, name: "Interviews", count: interviewsCounter },
    { id: 5, name: "Offers", count: offersCounter },
    { id: 6, name: "Rejected", count: rejectedCounter },
  ];

  function handleSubmit(e) {
    e.preventDefault();
    onAdd(company, role);
    setRole("");
    setCompany("");
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
          return (
            <AppListItem
              nextStatus={nextStatus}
              key={app.id}
              appId={app.id}
              place={app.place}
              title={app.title}
              status={app.status}
              date={`${dateTime.toLocaleString("en-Us", { month: "short" })} ${dateTime.getDate()}`}
            />
          );
        })}
      </ul>
    </main>
  );
}

export default TrackPage;
