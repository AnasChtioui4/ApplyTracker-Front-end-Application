import { useState } from "react";
import "./css/App.css";
import ApplyCounter from "./components/ApplyCounter.jsx";
import TrackPage from "./components/TrackPage.jsx";

function App() {
  const [totalCounter, setTotalCounter] = useState(0);
  const [applidCounter, setAppliedCounter] = useState(0);
  const [interviewCounter, setInterviewCounter] = useState(0);
  const [offersCounter, setOffersCounter] = useState(0);

  return (
    <>
      <ApplyCounter totalCounter={totalCounter} appliedCounter={applidCounter} interviewCounter={interviewCounter} offersCounter={offersCounter} />
      <TrackPage />
    </>
  );
}

export default App;
