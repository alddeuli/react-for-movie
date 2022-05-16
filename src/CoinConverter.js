import { useEffect, useState } from "react";

function Converter({ coin }) {
  const [usd, setUsd] = useState(0);
  const [inverted, setInverted] = useState(false);

  const onChange = (event) => setUsd(event.target.value);
  const reset = () => setUsd(0);
  const onConvert = () => {
    reset();
    setInverted((current) => !current);
  };
  return (
    <div>
      <h3>Hello~!</h3>
      <div>
        <label htmlFor="USD">USD: </label>
        <input
          id="USD"
          value={inverted ? usd * coin.quotes.USD.price : usd}
          type="number"
          onChange={onChange}
          disabled={inverted}
        />{" "}
        $
      </div>
      <div>
        <label htmlFor={coin.symbol}>{coin.symbol}: </label>
        <input
          id={coin.symbol}
          value={inverted ? usd : usd / coin.quotes.USD.price}
          type="number"
          disabled={!inverted}
          onChange={onChange}
        />{" "}
        ea
      </div>
      <button onClick={reset}>Reset</button>&nbsp;
      <button onClick={onConvert}>Convert</button>
    </div>
  );
}

function CoinConverter() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=100")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const [index, setIndex] = useState("-1");
  const [selected, setSelected] = useState([]);

  const onSelect = (event) => {
    setIndex(event.target.value);
    if (event.target.value === "-1") {
      setSelected([]);
    } else {
      setSelected(coins[event.target.value]);
    }
  };

  return (
    <div>
      {/* <h1>The Coin Converter ({coins.length})</h1> */}
      <h1>The Coin Converter {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <select value={index} onChange={onSelect}>
            <option key="-1" value="-1">
              Select Coin
            </option>
            {coins.map((coin, idx) => (
              <option key={idx} value={idx}>
                {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
          <hr />
          {index === "-1" ? (
            "Please Select Coin"
          ) : (
            <Converter coin={selected} />
          )}
        </div>
      )}
    </div>
  );
}

export default CoinConverter;
