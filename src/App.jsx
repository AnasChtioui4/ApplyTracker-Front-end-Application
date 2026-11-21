import { useState } from "react";
import "./css/App.css";
import ApplyCounter from "./components/ApplyCounter.jsx";
import TrackPage from "./components/TrackPage.jsx";

function App() {
  const [appList, setAppList] = useState([]);

  const totalCounter = appList.length;
  const wishlistCounter = appList.filter(
    (app) => app.status === "Wishlist",
  ).length
  const appliedCounter = appList.filter(
    (app) => app.status === "Applied",
  ).length;
  const interviewsCounter = appList.filter(
    (app) => app.status === "Interviews",
  ).length;
  const offersCounter = appList.filter(
    (app) => app.status === "Offers",
  ).length;
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
        interviewCounter={interviewsCounter}
        offersCounter={offersCounter}
        rejectedCounter={rejectedCounter}
      />
    </>
  );
}

export default App;
