import styled from "styled-components";

const headerContainer = styled.div`
  //  width:700px;
  .header_section {
    padding: 20px;
    display: flex;
    flex-direction: row;
    background: #282544;
    height: 100px;
    left: 446px;
    top: 6px;
    margin-right: 0px;
    justify-content: space-between;
    div {
      display: flex;
      flex-direction: column;
      text-align: center;

      span {
        display: block;
        margin-top: 5px;
      }

      .spec {
        color: #53e59e;
      }
      .spect {
        color: #ffffff;
      }
    }
    .profile {
      width: 200px;
      height: 60px;
      background: #1f1d39;
      border-radius: 33px;
      dispay: flex;
      flex-direction: row;
      img {
        width: 45px;
        height: 45px;
        left: 1157px;
        top: 41px;
        margin-left: 15px;
      }
      .icon {
        background: #ffffff;
        margin: 20px;
      }
    }
    .headers {
      dispay: flex;
      flex-direction: row;
      color: #ffffff;
      img {
        width: 12px;
        height: 12px;
        background: #4f4f4f;
        border-radius: 33px;
        margin: 15px 0px 0px 0px;
      }
    }
    .vector {
      width: 200px;
      height: 60px;
      background: #1f1d39;
      border-radius: 33px;
      dispay: flex;
      flex-direction: row;
      margin: 0px 10px 0px 10px;
      justify-content: center;
      color: #ffffff;
      img {
        left: 12.5%;
        right: 8.33%;
        top: 12.5%;
        bottom: 12.5%;
        margin: 15px 0px 0px 0px;
      }
    }
  }
`;
export default headerContainer;
