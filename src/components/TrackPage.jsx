import { useState } from "react";
import "../css/TrackPage.css";

function TrackPage() {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [select, setSelect] = useState(0);

  const filterOptions = ["All", "Wishlist", "Applied", "Interview", "Offer", "Rejected"];

  return (
    <main>
      <div className="add-apply">
        <input
          type="text"
          placeholder="Company / School"
          value={company}
          onChange={(e)=>setCompany(e.target.value)}
          className="add-input"
        />
        <input
          type="text"
          placeholder="Role / Program"
          className="add-input"
          onChange={(e)=>setRole(e.target.value)}
          value={role}
        />
        <button className="add-btn">+ Add</button>
      </div>
    </main>
  );
}

export default TrackPage;
