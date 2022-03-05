import React from "react";
import styled from "styled-components";
import CustomButton from "../CustomButton/CustomButton";
const Header = ({ logo, isSticky }) => {
  const HeaderEl = styled.header`
    margin-top: 50px;
    padding-left: 1rem;
    padding-right: 1rem;
    background-color: #fff;
    &.sticky{
        position: sticky;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 9999;
    }
  `;
  const Logo = styled.img`
    width: 100px;
    height: 50px;
  `;
  return (
    <HeaderEl className={`navbar ${isSticky ? "sticky" : ""}`}>
      <CustomButton
        type="customBtn"
        icon="fa fa-user"
        text="ثبت نام/ورود"
        csBgColor="transparent"
        csColor="#333"
        csBorderColor="#333"
        csOnFocusBoxShadow="unset"
      />
      <Logo src={logo} alt="logo" className="logo" />
    </HeaderEl>
  );
};

export default Header;
