import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import MarketContainer from "../../styles/marketStyle";
import CurrencyTable from "../../common/currenyChange";

const Market = () => {
  return (
    <MarketContainer>
      <div className="market_section">
        <div className="header">
          <h1>Market ETH/EUR</h1>
        </div>
        <div className="currencies">
          <div>
            <span>
              <SearchOutlined />
            </span>{" "}
            <span>
              <input type="text" placeholder="Search.." name="search" />
            </span>
          </div>
          <div className="currencylist">
            <ul>
              <li>ETH</li>
              <li>EUR</li>
              <li>JPR</li>
              <li>BTC</li>
            </ul>
          </div>
        </div>
        <div className="market_table"></div>
        <CurrencyTable />
      </div>
    </MarketContainer>
  );
};

export default Market;
