import React from "react";
import HeaderContainer from "./styles";
import {CaretDownOutlined} from "@ant-design/icons";
import Graph from '../graph';

const Header = () => {
  return (
    <>
    <HeaderContainer>
      <div className="header_section">
      <div className="headers">
      <div><img src="/dot.png" alt='img'/></div>
      <div><span>4.5552222</span><span>1255566585</span></div></div>
      <div className="headers">
      <div><img src="/dot.png" alt='img'/></div>
      <div><span className='spec'>4.5552222</span><span>1255566585</span></div></div>
      <div className="headers">
      <div><img src="/dot.png" alt='img'/></div>
      <div><span className='spec'>4.5552222</span><span>1255566585</span></div></div>
      <div className="vector">
      <div><img src="/Vector.png" alt='img'/></div>
      <div><span>4.5552222</span><span className='spec'>1255566585</span></div></div>
        <div className="profile">
        <div><img src="/prof.png" alt='img'/></div>
        <div><span className="spect">John</span><span className='spec'>loremipsum</span></div><div><CaretDownOutlined className="icon" /></div></div>
      </div>
    </HeaderContainer>
    <Graph />
    </>
  );
};
export default Header;
