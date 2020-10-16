import React from "react";
// import { SearchOutlined } from "@ant-design/icons";
import CurrencyTableContainer from "./currencyStyle";
import { marketValues } from "./fixture";

const CurrencyTable = () => {
  return (
    <CurrencyTableContainer>
      <table>
        <tr>
          <th>
            <span>
              <img src="/iconM.png" />
              {"   "}
            </span>
            name
          </th>
          <th>
            <span>
              <img src="/iconM.png" />
              {"   "}
            </span>
            Price
          </th>
          <th>
            <span>
              <img src="/iconM.png" />
              {"   "}
            </span>
            change
          </th>
        </tr>
        {marketValues.map((value, index) => (
          <tr key={index.toString()}>
            <td>
              <img src={value.icon} alt="image" />
              <span>&nbsp;</span>
              <span>&nbsp;</span>
              <span>&nbsp;</span>

              {value.name}
            </td>
            <td>{value.price}</td>
            <td>
              {`=${value.change}`}
              <span>&nbsp;</span>
              <span>&nbsp;</span>
              <span>&nbsp;</span>
              <img src={value.star} alt="image" />
            </td>
          </tr>
        ))}
      </table>
    </CurrencyTableContainer>
  );
};

export default CurrencyTable;
