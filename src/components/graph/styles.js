import styled from "styled-components";

export const Container = styled.div`
  .graph {
    background: #282544;
    margin: 12px 0px 50px 0px;
  }
  .marked_order {
    height: 150px;
    left: 446px;
    top: 518px;
    background: #282544;
  }
  .headers {
    span:nth-child(1) {
      border-bottom-color: red;
    }
    display: flex;
    flex-direction: row;
    // justify-content: space-between;
    // width: 390px;
    padding: 15px 0px 15px 0px;
    color: #ffffff;
    span {
      margin-right: 20px;
    }
  }
  .table-secttion {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .left-table {
    height: 150px;
    left: 446px;
    top: 574px;
    background: #1e1c39;
  }
  .right-table {
    background: #24233d;
    height: 150px;
  }
  .table-items {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #ffffff;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    padding: 5px;
  }
  .q-icon {
    width: 10px;
    height: 10px;
    left: 3px;
    top: 4.5px;
    border: 0.5px solid #828282;
    box-sizing: border-box;
    margin-right: 5px;
  }
  .ETH {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #828282;
  }
  .buy {
    width: 56px;
    padding-top: 3px;
    height: 29px;
    left: 844px;
    top: 701px;
    background: #53e59e;
    border-radius: 12.5px;
    text-align: center;
  }
  .spec {
    background: #282544;
    border-radius: 12.5px;
    text-align: center;
    width: 130px;
    height: 29px;
    left: 602px;
  }
  .sell {
    width: 37px;
    height: 19px;
    left: 1352px;
    top: 706px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
  }
`;
