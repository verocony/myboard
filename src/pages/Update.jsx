import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateData } from "../redux/modules/postSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { __updatePost } from "../redux/modules/postSlice";
import Button from "../elements/button";
import Header from "../components/Header";
import Layout from "../components/Layout";
import styled from "styled-components";

const Update = () => {
  const paramID = useParams();
  const navigate = useNavigate();

  const postUser = useSelector((state) => state.post.post);

  useEffect(() => {}, [postUser]);
  const indexId = postUser.findIndex((user) => {
    if (user.id == paramID.id) {
      return true;
    }
    return false;
  });

  const initialState = {
    id: 0,
    writer: "",
    title: "",
    body: "",
  };

  const [input, setInput] = useState(postUser[indexId]);

  const dispatch = useDispatch();
  const inputId = paramID;

  const onChangeHandlerInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const onUpdateHandler = (e) => {
    e.preventDefault();
    const insertID = { ...input, id: paramID.id };
    dispatch(__updatePost(insertID));
  };

  const onResetHandler = (e) => {
    e.preventDefault();
    setInput(initialState);
  };
  return (

    <Layout>
      <div className="list-container">
        <h2>작성자 : {postUser[indexId].writer}</h2>

        <div className="list-wrapper"></div>
        <div className="button-set">
          <h2> {postUser[indexId].title} </h2>
        </div>
        <div> {postUser[indexId].body} </div>
      </div>

      <div className="add-form">
        <div className="input-group">
          <div className="input-Text">작성자</div>
          <input
            type="text"
            name="writer"
            className="input"
            value={input.writer || ""}
            onChange={onChangeHandlerInput}
            placeholder="이름 입력(10자 이내)"
            maxLength="10"
          >
            
          </input>
          <div className="input-Text">제목</div>
          
          <input
            type="text"
            name="title"
            className="input"
            value={input.title || ""}
            onChange={onChangeHandlerInput}
          ></input>
          <div className="input-Text">내용</div>
          <input
            type="text"
            name="body"
            value={input.body || ""}
            placeholder="내용 입력(200자 이내)"
            maxLength="200"
            className="input"
            onChange={onChangeHandlerInput}
          ></input>
        </div>
        <Btns>
        <Button
          _onClick={onUpdateHandler}
          margin="10px"
          width="465px"
          height="50px"
          bg="#fbfbfb"
          color="#ff6f61"
          border="1px solid #e7e7e7"
          className="add-button"
        >
          추가하기
        </Button>
        <Button
          _onClick={onResetHandler}
          margin="10px"
          width="465px"
          height="50px"
          bg="#fbfbfb"
          color="#ff6f61"
          border="1px solid #e7e7e7"
          className="add-button"
          
        >
          Reset
        </Button>
        </Btns>
        {/* Btns */}
      </div>
       <Button
          width="950px"
          height="50px"
          margin="0 20px"
          _onClick={()=> {
            navigate("/List");
           }}
        >
          게시글 리스트
        </Button>
        </Layout>
  );
};

export default Update;

const Btns = styled.div`
  display: flex;
`
