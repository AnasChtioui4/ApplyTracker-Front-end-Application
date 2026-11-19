import { useState } from "react";
import "../css/TrackPage.css";
import AppListItem from "./AppListItem";

function TrackPage({
  totalCounter,
  wishlistCounter,
  appliedCounter,
  interviewCounter,
  offersCounter,
  rejectedCounter,
}) {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [select, setSelect] = useState(1);
  const [search, setSearch] = useState("");

  const [appList, setAppList] = useState([]);

  const fiterOptions = [
    { id: 1, name: "All", count: totalCounter },
    { id: 2, name: "Wishlist", count: wishlistCounter },
    { id: 3, name: "Applied", count: appliedCounter },
    { id: 4, name: "Interviews", count: interviewCounter },
    { id: 5, name: "Offers", count: offersCounter },
    { id: 6, name: "Rejected", count: rejectedCounter },
  ];

  function handleSubmit(e) {
    e.preventDefault();
    setAppList([...appList, {id: Date.now(), place: company, title: role, status: "Wishlist" }]);
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
          return <AppListItem />;
        })}
      </ul>
    </main>
  );
}

export default TrackPage;
