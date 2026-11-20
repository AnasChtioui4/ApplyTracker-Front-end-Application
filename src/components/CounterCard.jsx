import "../css/CounterCard.css";

function CounterCard({name, typeCount}) {
  return (
    <div style={{backgroundColor: name === "All" && "var(--blue)"}} className="card">
      <span id="count-name">{name}</span>
      <p style={{color: name === "All" && "ghostwhite"}} id="count">{typeCount}</p>
    </div>
  );
}

export default CounterCard;
