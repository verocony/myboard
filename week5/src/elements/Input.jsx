import React from "react";
import styled from "styled-components";

const Input = (props) => {
  return <MyInput {...props} required={true} minLenth={5} />;
};

export default Input;

const MyInput = styled.input`
  box-sizing: border-box;
  height: 50px;
  width: 500px;
  outline: none;
  border-radius: 8px;
  padding: 0 12px;
  font-size: 14px;
  border: 1px solid #eee;
`;
