import React from "react";

import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import Button from "../elements/button";

const Main = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div>
        {/* <button
          onClick={() => {
            navigate("/Form");
          }}
        >
          게시글 작성
        </button> */}

        {/* <Button 
        label="게시글 작성" styleClass="" onClick={()=> {
          navigate("/Form");
         }} disabled={false} 
         /> */}

        {/* <button
          onClick={() => {
            navigate("/List");
          }}
        >
          게시글 리스트
        </button> */}
         {/* <Button 
        label="게시글 리스트" styleClass="" onClick={()=> {
          navigate("/List");
         }} disabled={false} 
         /> */}
         <Button
          _onClick={()=> {
            navigate("/Form")}}
          margin="0 0 10px"
          width="100%"
          height="45px"
          bg="#fbfbfb"
          color="#ff6f61"
          border="1px solid #e7e7e7"
        >
          게시글 작성
        </Button>
        <Button
          width="100%"
          height="45px"
          bold="false"
          _onClick={()=> {
            navigate("/List");
           }}
        >
          게시글 리스트
        </Button>





      </div>
    </Layout>
  );
};

export default Main;



