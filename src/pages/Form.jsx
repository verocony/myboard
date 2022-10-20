import React, { useState } from "react";
import './Form.css'
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { createData } from "../redux/modules/postSlice";
import { useNavigate } from "react-router-dom";
import { __addPost } from "../redux/modules/postSlice";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Button from "../elements/button";

const Form = () => {
  const navigate = useNavigate();
  const initialState = {
    id: 0,
    writer: "",
    title: "",
    body: "",
  };

  const getRandom = () => Math.random();
  const inputId = getRandom();

  const [input, setInput] = useState(initialState);
  const dispatch = useDispatch();

  const onChangeHandlerInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
    // console.log(input);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (
      input.writer.trim() === "" ||
      input.title.trim() === "" ||
      input.body.trim() === ""
    )
      return alert("모두 입력 해주세요");
    const insertID = { ...input, id: inputId };
    dispatch(__addPost(insertID));
    setInput(initialState);
  };

  return (

    <Layout>
      <div className="board_info">자유롭게 글을 남겨주세요 :) </div>

      <div className="add-form">
        <div className="input-group">
          <div className="input_1">
          <div className="input-Text">작성자</div>
          <input
            type="text"
            name="writer"
            className="input"
            value={input.writer || ""}
            onChange={onChangeHandlerInput}
            placeholder="이름 입력(10자 이내)"
            maxLength="10"
          ></input>
          </div>
          {/* input_1 */}
          <div className="input_2">
          <div className="input-Text">제목</div>
          <input
            type="text"
            name="title"
            className="input"
            value={input.title || ""}
            onChange={onChangeHandlerInput}
            placeholder="제목 입력(30자 이내)"
            maxLength="30"
          ></input>
          </div>
          {/* input_2 */}
          <div className="input_3">
          <div className="input-Text">내용</div>
          <input 
            type="text"
            name="body"
            value={input.body || ""}
            className="input text3"
            onChange={onChangeHandlerInput}
            placeholder="내용 입력(200자 이내)"
            maxLength="200"
          ></input>
        </div>
        {/* input_3 */}
        </div>
        {/* input-group */}
        <Btns>
         <Button
          _onClick={onSubmitHandler}
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
          _onClick={onSubmitHandler}
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
      {/* add-form */}
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

export default Form;


const Btns = styled.div`
  display: flex;
`