import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  deleteCommentData,
  createCommentData,
} from "../redux/modules/postSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  __addComment,
  __deleteComment,
  __getComments,
} from "../redux/modules/postSlice";
import styled from "styled-components";
import './Detail.css'
import Header from "../components/Header";
import Layout from "../components/Layout";
import Button from "../elements/button";

const Detail = () => {
  const navigate = useNavigate();
  const paramID = useParams();
  const postUser = useSelector((state) => state.post.post);
  const commentList = useSelector((state) => state.post.comment);
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

  const getRandom = () => Math.random();
  const inputId = getRandom();

  const [input, setInput] = useState(initialState);
  const dispatch = useDispatch();

  const onChangeHandlerInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const onCommentSubmitHandler = (e) => {
    e.preventDefault();
    if (input.writer.trim() === "" || input.comment.trim() === "")
      return alert("모두 입력 해주세요");
    const insertID = { ...input, id: inputId, userId: paramID.id };
    dispatch(__addComment(insertID));
    setInput(initialState);
  };

  const onResetHandler = (e) => {
    e.preventDefault();
    setInput(initialState);
    console.log(postUser);
    console.log(commentList);
  };

  const onDeleteHanlder = (Id) => {
    dispatch(__deleteComment(Id));
  };

  //Comment ListUp
  useEffect(() => {
    dispatch(__getComments());
  }, [dispatch]);

  return (
    <Layout>

      <div className="list-container">
        <h>작성자 : {postUser[indexId].writer}</h>

        {/* <div className="list-wrapper"></div> */}
        <div className="button-set">
          <h2> {postUser[indexId].title} </h2>
        </div>
        <div> {postUser[indexId].body} </div>
      </div>
      {/* list-container */}
      <Btns>
      <Button
          width="100%"
          height="50px"
          bold="false"
          margin="10px 20px 20px 20px"
          _onClick={() => {
            navigate(`/Update/${paramID.id}`);
          }}
        >
          수정하기
        </Button>
      <Button
          width="100%"
          height="50px"
          bold="false"
          margin="10px 20px 20px 10px"
          _onClick={()=> {
            navigate("/List");
           }}
        >
          리스트 보기
        </Button>
        </Btns>
        {/* Btns */}


      <h3>Comment</h3>
      <div className="add-form">
        <div className="input-group">
          {/* <label className="input-Text">작성자</label> */}
          <input
            type="text"
            name="writer"
            className="input_name"
            value={input.writer || ""}
            placeholder="작성자"
            onChange={onChangeHandlerInput}
          ></input>

          {/* <label className="input-Text">내용</label> */}
          <input
            type="text"
            name="comment"
            value={input.comment || ""}
            className="input_cont"
            placeholder="내용"
            onChange={onChangeHandlerInput}
          ></input>
        </div>
        <Button
          _onClick={onCommentSubmitHandler}
          margin="10px"
          width="100px"
          height="45px"
          bg="#fbfbfb"
          color="#ff6f61"
          border="1px solid #e7e7e7"
          className="add-button"
        >
          댓글 추가하기
        </Button>
        <Button
          _onClick={onResetHandler}
          margin="10px"
          width="100px"
          height="45px"
          bg="#fbfbfb"
          color="#ff6f61"
          border="1px solid #e7e7e7"
          className="add-button"
        >
          Reset
        </Button>
        
      </div>

      <div className="list-wrapper">
        {commentList.map((value, index) => {
          //   console.log(value);
          if (value.userId == paramID.id) {
            return (
              <div key={index} className="todo-container">
                <div>
                  <h2 className="todo-title">{value.writer}</h2>
                  <div>{value.comment}</div>
                </div>
                <div className="button-set">
                  <button
                    className="todo-delete-button button"
                    onClick={() => onDeleteHanlder(value.id)}
                  >
                    삭제하기
                  </button>
                </div>
              </div>
            );
          }
        })}
      </div>
      </Layout>

  );
};

export default Detail;


const Btns = styled.div`
  display: flex;
`