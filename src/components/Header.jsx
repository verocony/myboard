import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../elements/button";

const Header = () => {
    const navigate = useNavigate();
    return (
        <HeaderContainer>
            <Button
          _onClick={()=> {
            navigate("/")}}
          margin="0 0 10px"
          width="50px"
          height="45px"
          bg="#fbfbfb"
          color="#ff6f61"
          border="1px solid #e7e7e7"
        >
          Home
        </Button>
            <HeaderTitle>모두의 게시판</HeaderTitle>
        </HeaderContainer>
        
    )
}

export default Header;

const HeaderContainer = styled.div`
    width: 1000px;
    margin: 10px auto;
`
const HeaderTitle = styled.div`
    font-size: 30px;
    font-weight: 700;
    display: inline-block;   
    position: fixed;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);

`