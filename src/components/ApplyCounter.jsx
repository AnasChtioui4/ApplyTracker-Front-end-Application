import "../css/ApplyCounter.css";
import CounterCard from "./CounterCard.jsx";

function ApplyCounter({ totalCounter, appliedCounter, interviewCounter, offersCounter }) {
  const categories = [
    {name: "All", count: totalCounter},
    {name: "Applied", count: appliedCounter},
    {name: "Interviews", count: interviewCounter},
    {name: "Offers", count: offersCounter}
  ];
  
    return (
    <nav>
      <div className="apply-logo">
        <p id="logo">
          Apply<span>Tracker</span>
        </p>
        <p id="counter">
          {totalCounter} <span>application{totalCounter > 1 && "s"}</span>
        </p>
      </div>
      <div className="counter-cards">
        {categories.map(c => <CounterCard name={c.name} typeCount={c.count} />)}
      </div>
    </nav>
  );
}

export default ApplyCounter;
