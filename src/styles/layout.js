import styled from "styled-components";

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  .sidebar {
    background: #282544;
    width: 80px;

    left: 5px;
    top: 4px;

    ul {
      margin-top: 30px;
      margin-right: 20px;
      text-align: center;
      li:nth-child(3) {
        // background:#4F4F4F;
        //   border-radius:70px;;
        //   height:25px;
        //   width:25px;
        // }
      }
      li {
        list-style-type: none;
        margin-top: 40px;
      }
    }
  }
  .market {
    dispay: flex;
    flex-direction: column;
  }
  .my_orders {
    color: #ffff;
    margin-top: 21px;
    width: 500px;

    background: #282544;
    div {
      ul {
        li:first-child {
          margin-top: 20px;
          font-family: Roboto;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
        }
        li:nth-child(2) {
          margin-top: 20px;
          margin-right: 27px;
          font-size: 16px;
          line-height: 16px;
          background: #1f1d39;
          border-radius: 33px;
          width: 120px;
          height: 25px;
          text-align: center;
          padding-top: 10px;
        }
        li:nth-child(4) {
          color: #4f4f4f;
        }
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li {
          list-style-type: none;
        }
      }
    }
  }
  .transaction {
    margin-top: 20px;
    background: #1e1c39;
    p {
      color: red;
      position: relative;
      top: 40px;
      left: 110px;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      color: #ffffff;
    }
  }
  .header {
    .orders_headings {
      ul {
        color: #ffff;
        display: flex;
        justify-content: space-between;
        li:nth-child(1) {
          font-family: Roboto;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 19px;
        }
        li:nth-child(3) {
          font-family: Roboto;
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 19px;
          color: #4f4f4f;
        }
      }
    }
    ul {
      display: flex;
      li {
        list-style-type: none;
        span:nth-child(1) {
          font-family: Roboto;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 19px;
          color: #4f4f4f;
        }
        span:nth-child(2) {
          font-family: Roboto;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 19px;
          color: #ffffff;
        }
      }
    }
  }
`;

export default LayoutWrapper;
