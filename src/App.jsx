import { useState } from "react";
import "./css/App.css";
import ApplyCounter from "./components/ApplyCounter.jsx";
import TrackPage from "./components/TrackPage.jsx";

function App() {
  const [appList, setAppList] = useState([]);

  const totalCounter = appList.length;
  const wishlistCounter = appList.filter(
    (app) => app.status === "Wishlist",
  ).length;
  const appliedCounter = appList.filter(
    (app) => app.status === "Applied",
  ).length;
  const interviewsCounter = appList.filter(
    (app) => app.status === "Interviews",
  ).length;
  const offersCounter = appList.filter((app) => app.status === "Offers").length;
  const rejectedCounter = appList.filter(
    (app) => app.status === "Rejected",
  ).length;

  function addApplication(company, role) {
    const newApp = {
      id: Date.now(),
      place: company,
      title: role,
      status: "Wishlist",
    };
    setAppList([...appList, newApp]);
  }

  // outside the component, defined once
const STATUSES = ["Wishlist", "Applied", "Interviews", "Offers", "Rejected"];

// inside App, at the top level (not inside addApplication)
function moveToNextStatus(id) {
  setAppList(
    appList.map((app) => {
      if (app.id === id) {
        const index = STATUSES.indexOf(app.status);
        const next = STATUSES[(index + 1) % STATUSES.length];
        return { ...app, status: next };
      }
      return app;
    })
  );
}

  return (
    <>
      <ApplyCounter
        totalCounter={totalCounter}
        appliedCounter={appliedCounter}
        interviewCounter={interviewsCounter}
        offersCounter={offersCounter}
      />
      <TrackPage
        appList={appList}
        onAdd={addApplication}
        totalCounter={totalCounter}
        wishlistCounter={wishlistCounter}
        appliedCounter={appliedCounter}
        interviewsCounter={interviewsCounter}
        offersCounter={offersCounter}
        rejectedCounter={rejectedCounter}
        nextStatus={moveToNextStatus}
      />
    </>
  );
}

export default App;
