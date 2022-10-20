import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import Button from "../elements/button";
import Image from "../elements/Image";

const Main = () => {
  const navigate = useNavigate();

  return (
    <Layout>

      <Image  height="600px" src="/images/main_bg_01.jpg" margin="30px 0"/>
         <Btns>
         <Button
          _onClick={()=> {
            navigate("/Form")}}
          margin="10px"
          width="100%"
          height="50px"
          bg="#fbfbfb"
          color="#ff6f61"
          border="1px solid #e7e7e7"
        >
          게시글 작성
        </Button>
        <Button
          width="100%"
          height="50px"
          bold="false"
          margin="10px"
          _onClick={()=> {
            navigate("/List");
           }}
        >
          게시글 리스트
        </Button>
      </Btns>
      {/* Btns */}
    </Layout>
    // Layout
  );
};

export default Main;

const Btns = styled.div`
  display: flex;

  `



