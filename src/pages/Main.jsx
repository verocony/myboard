import React from "react";

import Layout from "../components/layout/Layout";
import Header from "../components/header/Header";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Header></Header>
      <div>
        <button
          onClick={() => {
            navigate("/Form");
          }}
        >
          게시글 작성
        </button>
        <button
          onClick={() => {
            navigate("/List");
          }}
        >
          게시글 리스트
        </button>
      </div>
    </Layout>
  );
};

export default Main;
