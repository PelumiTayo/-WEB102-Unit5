import React, { useState, useEffect } from "react";
const API_KEY = import.meta.env.VITE_APP_API_KEY;

export default function CoinInfo({ image, name, symbol }) {
  const [price, setPrice] = useState(null);
  useEffect(() => {
    async function getCoinPrice() {
      const response = await fetch(
        `https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=USD&api_key=` +
          API_KEY);
      const data = await response.json();
      setPrice(data);
    }
    getCoinPrice().catch(console.error);
  }, [symbol]);

  return (
    <div>
      {price ? (
        <li className="main-list" key={symbol}>
          <img
            className="icons"
            src={`https://www.cryptocompare.com${image}`}
            alt={`Small icon for ${name} crypto coin`}
          />
          {name} <span className="tab"></span> ${price.USD} USD
        </li>
      ) : null}
    </div>
  );
}
