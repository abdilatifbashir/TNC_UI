import styled from "styled-components";

const MarketContainer = styled.div`
  display: flex;
  flex-direction: row;
  grid-gap:70px;
  gap: 20px;
  .market_section {
    background:  #282544;
    width: 500px;
    height: 400px;
     left: 97px;
     top: 4px;
    .header{
      h1{
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        color: #FFFFFF;
        padding-top:25px;
        padding-left:16px;
      }
    }
    .currencies{
      margin-left:20px;
      display:flex;
      div{
        span:nth-child(1){
          color:#ffff;
        }
      }

     

      .currencylist{
        position:relative;
        margin-left:10px;
        bottom:15px;
        background: #1F1D39;
        border-radius: 33px;
        height: 65px;
        
        ul {
          li:first-child{
            background: #53E59E;
            border-radius: 33px;
            padding: 4px;
          }
          
          display:flex;
          li{
            list-style-type: none;
            color:#ffff;
            margin:10px;
          }

        }
      }


    }
`;

export default MarketContainer;
