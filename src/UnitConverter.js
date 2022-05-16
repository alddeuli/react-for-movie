import { useState } from "react";

function MinutesToHours() {
  const [amount, setAmount] = useState(0);
  const [inverted, setInverted] = useState(false);

  const onChange = (event) => {
    setAmount(event.target.value);
  };
  const reset = () => setAmount(0);
  const onInverted = () => {
    reset();
    setInverted((current) => !current);
  };
  return (
    <div>
      <h3>Min 2 Hour</h3>
      <div>
        <label htmlFor="minutes">Minutes: </label>
        <input
          value={inverted ? amount * 60 : amount}
          id="minutes"
          placeholder="Minutes"
          type="number"
          onChange={onChange}
          disabled={inverted}
        />
      </div>
      <div>
        <label htmlFor="hours">Hours: </label>
        <input
          value={inverted ? amount : Math.round(amount / 60)}
          id="hours"
          placeholder="Hours"
          type="number"
          disabled={!inverted}
          onChange={onChange}
        />
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={onInverted}>
        {inverted ? "Turn back" : "Inverted"}
      </button>
    </div>
  );
}

function KmToMiles() {
  const [distance, setDistance] = useState(0);
  const [inverted, setInverted] = useState(false);

  const onChange = (event) => {
    setDistance(event.target.value);
  };
  const reset = () => setDistance(0);
  const onInverted = () => {
    reset();
    setInverted((current) => !current);
  };
  return (
    <div>
      <h3>km 2 M</h3>
      <div>
        <label htmlFor="km">Km: </label>
        <input
          value={inverted ? distance * 1.609 : distance}
          id="km"
          placeholder="Kilometers"
          type="number"
          onChange={onChange}
          disabled={inverted}
        />
      </div>
      <div>
        <label htmlFor="miles">Miles: </label>
        <input
          value={inverted ? distance : Math.round(distance / 1.609)}
          id="miles"
          placeholder="Miles"
          type="number"
          disabled={!inverted}
          onChange={onChange}
        />
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={onInverted}>
        {inverted ? "Turn back" : "Inverted"}
      </button>
    </div>
  );
}

function UnitConverter() {
  const [index, setIndex] = useState("-1");
  const onSelect = (event) => {
    setIndex(event.target.value);
  };
  return (
    <div>
      <h1 className="hi">Super Converter</h1>
      <select value={index} onChange={onSelect}>
        <option value="-1">Select yout units</option>
        <option value="0">Minutes & Hours</option>
        <option value="1">Kilometers & Miles</option>
      </select>
      <hr />
      {index === "-1" ? "Please select your units" : null}
      {index === "0" ? <MinutesToHours /> : null}
      {index === "1" ? <KmToMiles /> : null}
    </div>
  );
}

export default UnitConverter;
