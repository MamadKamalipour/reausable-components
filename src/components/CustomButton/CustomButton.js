import React from "react";
import styled from "styled-components";
const CustomButton = ({
  type, //primary , secondary, submit , cancel , customBtn
  onClickHandler,
  text,
  isDisabled,
  icon,
  btnWidth,
  csColor,
  csBgColor,
  csBorderColor,
  csOnFocusBoxShadow,
  style,
  hoverColor
}) => {
  const PrimaryBtn = styled.button`
    width: ${(props) => props.btnWidth};
    &.primary {
      color: #fff;
      background-color: #0d6efd;
      border-color: #0d6efd;
      & i {
        padding-left: 0.5rem;
      }
      &:focus {
        box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 76%);
      }
    }
  `;
  const SecondaryBtn = styled.button`
    width: ${(props) => props.btnWidth};
    &.secondary {
      color: #fff;
      background-color: #6c757d;
      border-color: #6c757d;
      & i {
        padding-left: 0.5rem;
      }
      &:focus {
        box-shadow: 0 0 0 0.25rem rgb(108 117 125 / 63%);
      }
    }
  `;
  const SubmitBtn = styled.button`
    width: ${(props) => props.btnWidth};
    &.submit {
      color: #fff;
      background-color: #198754;
      border-color: #198754;
      & i {
        padding-left: 0.5rem;
      }
      &:focus {
        box-shadow: 0 0 0 0.25rem rgb(25 135 84 / 43%);
      }
    }
  `;
  const CancelBtn = styled.button`
    width: ${(props) => props.btnWidth};
    &.cancel {
      color: #fff;
      background-color: #dc3545;
      border-color: #dc3545;
      & i {
        padding-left: 0.5rem;
      }
      &:focus {
        box-shadow: 0 0 0 0.25rem rgb(255 0 0 / 28%);
      }
    }
  `;
  const CustomBtn = styled.button`
    width: ${(props) => props.btnWidth};
    &.custom-color {
      transition: all .5s linear;
      color: ${(props) => props.csColor};
      background-color: ${(props) => props.csBgColor};
      border-color: ${(props) => props.csBorderColor};
      & i {
        padding-left: 0.5rem;
      }
      &:focus {
        box-shadow: ${(props) => props.csOnFocusBoxShadow};
      }
      &:hover{
        opacity: .9;
        color: ${props=>props.hoverColor};
      }
    }
  `;
  return (
    <>
      {type === "primary" && (
        <PrimaryBtn
          className={`btn primary ${isDisabled ? "disabled" : ""}`}
          onClick={onClickHandler}
          btnWidth={btnWidth}
        >
          <i className={icon}></i>
          {text}
        </PrimaryBtn>
      )}
      {type === "secondary" && (
        <SecondaryBtn
          className={`btn secondary ${isDisabled ? "disabled" : ""}`}
          onClick={onClickHandler}
          btnWidth={btnWidth}
        >
          <i className={icon}></i>
          {text}
        </SecondaryBtn>
      )}
      {type === "submit" && (
        <SubmitBtn
          className={`btn submit ${isDisabled ? "disabled" : ""}`}
          type="submit"
          onClick={onClickHandler}
          btnWidth={btnWidth}
        >
          <i className={icon}></i>
          {text}
        </SubmitBtn>
      )}
      {type === "cancel" && (
        <CancelBtn
          className={`btn cancel ${isDisabled ? "disabled" : ""}`}
          onClick={onClickHandler}
          btnWidth={btnWidth}
        >
          <i className={icon}></i>
          {text}
        </CancelBtn>
      )}
      {type === "customBtn" && (
        <CustomBtn
          className={`btn custom-color ${isDisabled ? "disabled" : ""}`}
          onClick={onClickHandler}
          btnWidth={btnWidth}
          csColor={csColor}
          csBgColor={csBgColor}
          csBorderColor={csBorderColor}
          csOnFocusBoxShadow={csOnFocusBoxShadow}
          hoverColor={hoverColor}
          style={style}
        >
          <i className={icon}></i>
          {text}
        </CustomBtn>
      )}
    </>
  );
};

export default CustomButton;
