import React from "react";
import Market from "../components/markets";
import LayoutWrapper from "../styles/layout";
import Header from "../components/header";
import OrderTable from "../common/orders";
import { OrderValues } from "../common/fixtures/ordersfixture";
import { BuySellerOrders } from "../common/fixtures/buySellOrder";
import TransactionTable from "../components/transactions";
import { PieChartOutlined } from "@ant-design/icons";
import { WalletOutlined } from "@ant-design/icons";

const LayoutContainer = () => {
  return (
    <LayoutWrapper>
      <div className="sidebar">
        {/* <h1>sidebar</h1> */}

        <ul>
          <li>
            {" "}
            <img src="/diameter.png" />
          </li>

          <li>
            <img src="piechart.png" />
          </li>
          <li>
            <img src="boxIcon.png" />
          </li>
          <li>
            <img src="/wallet.png" />
          </li>
          <li>
            <img src="msg.png" />
          </li>
        </ul>
      </div>
      <div className="market">
        {/* Market component */}
        <Market />
        {/* OrderTable component */}
        <div className="my_orders">
          <div className="view_all">
            <ul>
              <li>My Orders</li>
              <li>View All</li>
            </ul>
          </div>
          <OrderTable OrderData={OrderValues} />
          <div className="transaction">
            <p>Latest Transactions</p>
          </div>
          <TransactionTable />
        </div>
        {/* transactions component */}
      </div>
      <div className="header">
        {/* header,graph components goes here  */}
        <Header />
        <div className="orders_headings">
          <ul>
            <li>Buy Orders</li>
            <li>
              <span>Total 5548566 ETH</span>&nbsp;&nbsp;&nbsp;
              <span>Sell Orders</span>
            </li>
            <li>Total 5548566 ETH</li>
          </ul>
        </div>
        <ul>
          <li>
            <OrderTable OrderData={BuySellerOrders} />
          </li>
          <li>
            <OrderTable OrderData={BuySellerOrders} />
          </li>
        </ul>
      </div>
    </LayoutWrapper>
  );
};
export default LayoutContainer;
