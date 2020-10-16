import React from "react";
// import { SearchOutlined } from "@ant-design/icons";
import TransactionTableContainer from "./transactionStyle";
import { transactionValues } from "./fixture";

const TransactionTable = () => {
  return (
    <TransactionTableContainer>
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
            When
          </th>
        </tr>
        {transactionValues.map((value, index) => (
          <tr key={index.toString()}>
            <td>
              <img src={value.icon} alt="image" />
              <span>&nbsp;</span>
              <span>&nbsp;</span>
              <span>&nbsp;</span>

              {value.rate}
            </td>
            <td>{value.amount}</td>
            <td>
              {`${value.when}sec`}
              <span>&nbsp;</span>
              <span>&nbsp;</span>
              <span>&nbsp;</span>
              <img src={value.star} alt="image" />
            </td>
          </tr>
        ))}
      </table>
    </TransactionTableContainer>
  );
};

export default TransactionTable;
