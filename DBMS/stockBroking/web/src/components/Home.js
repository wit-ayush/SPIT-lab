import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Home.css"; // Import CSS
import { BASE_URL } from "../constants";
import axios from "axios";

const Home = () => {
  
  const accountData = JSON.parse(useSelector((state) => state.accountData));

  const [ stockList, setstockList ] = useState([]);

  async function getStocksData(params) {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${BASE_URL}getStocks`,
      headers: {},
    };

    await axios
      .request(config)
      .then((response) => {
        setstockList(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getStocksData();
  }, []);
  
  return (
    <div className="home-container">
      <div style={{width: "50%", }}>
        <h2 style={{ fontStyle: 'italic', color: '#FFD700'}}>Stocks Available</h2>
        <div className="data-container">
        {
          Boolean(stockList.length) ?
            stockList.map((stock) => (
              <div key={stock.stockId}>
                <h3>
                  {stock.stock_name} ({stock.ticker})
                </h3>
                <p>Current Price: {stock.cmp}</p>
                <button className="button">Buy</button>
                <button className="button">Sell</button>
              </div>
            ))
            : <div>No Stocks there</div>
        }
        </div>
      </div>
      <div style={{ width : 2, height: "100vh", backgroundColor: 'red'}} />
      <div style={{width: "50%", justifyContent: 'center'}}>
        <div style={{  height: '50%'}} >
          <h2 style={{ fontStyle: 'italic', color: '#FFD700'}}>Portofolio</h2>
          <div className="data-container">
          {
            Boolean(stockList.length) ?
              stockList.map((stock) => (
                <div key={stock.stockId}>
                  <h3>
                    {stock.stock_name} ({stock.ticker})
                  </h3>
                  <p>Buy Price: {stock.cmp}</p>
                  <p>Current Price: {stock.cmp}</p>
                  <div style={{ width: '100%', height: 1, backgroundColor: 'red'}} />
                </div>
              ))
              : <div>No Stocks there</div>
          }
          </div>
        </div>
        <div style={{  height: '50%',}} >
          <h2 style={{ fontStyle: 'italic', color: '#FFD700'}}>Account Balance</h2>
          <div className="data-container">
          <h3>{accountData?.balance ? accountData?.balance : 0} INR</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
