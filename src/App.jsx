import { useState } from "react";
import "./css/App.css";
import ApplyCounter from "./components/ApplyCounter.jsx";
import TrackPage from "./components/TrackPage.jsx";

function App() {
  const [totalCounter, setTotalCounter] = useState(0);
  const [appliedCounter, setAppliedCounter] = useState(0);
  const [wishlistCounter, setWishlistCounter] = useState(0);
  const [interviewCounter, setInterviewCounter] = useState(0);
  const [offersCounter, setOffersCounter] = useState(0);
  const [rejectedCounter, setRejectedCounter] = useState(0);

  return (
    <>
      <ApplyCounter
        totalCounter={totalCounter}
        appliedCounter={appliedCounter}
        interviewCounter={interviewCounter}
        offersCounter={offersCounter}
      />
      <TrackPage
        totalCounter={totalCounter}
        appliedCounter={appliedCounter}
        wishlistCounter={wishlistCounter}
        interviewCounter={interviewCounter}
        offersCounter={offersCounter}
        rejectedCounter={rejectedCounter}
      />
    </>
  );
}

export default App;
