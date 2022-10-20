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
          width="45px"
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
    border: 1px solid black;


`

const ButtonHome = styled.div`
    
`

const HeaderTitle = styled.div`
    
`