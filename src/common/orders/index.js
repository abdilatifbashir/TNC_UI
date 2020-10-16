import React from "react";
// import { SearchOutlined } from "@ant-design/icons";
import OrderTableContainer from "./orderStyle";
import { marketValues } from "../currenyChange/fixture";
// import { OrderValues } from "./fixture";

const OrderTable = ({ OrderData }) => {
  return (
    <OrderTableContainer>
      <table>
        <tr>
          <th>
            <span>
              <img src="/iconM.png" />
              {"   "}
            </span>
            Rate
          </th>
          <th>
            <span>
              <img src="/iconM.png" />
              {"   "}
            </span>
            Amount
          </th>
          <th>
            <span>
              <img src="/iconM.png" />
              {"   "}
            </span>
            Price
          </th>
        </tr>
        {OrderData.map((value, index) => (
          <tr key={index.toString()}>
            <td>
              {value.icon ? (
                <span>
                  <img src={value.icon} alt="image" />
                  <span>&nbsp;</span>
                  <span>&nbsp;</span>
                  <span>&nbsp;</span>
                </span>
              ) : (
                ""
              )}

              {value.rate}
            </td>
            <td>{value.amount}</td>
            <td style={{ color: value.color }}>
              {/* {`${value.price}%`} */}
              {value.price}
              <span>&nbsp;</span>
              <span>&nbsp;</span>
              <span>&nbsp;</span>
              <img src={value.star} alt="image" />
            </td>
          </tr>
        ))}
      </table>
    </OrderTableContainer>
  );
};

export default OrderTable;
