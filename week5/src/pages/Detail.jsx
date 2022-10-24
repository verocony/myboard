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
    <div>
      {/* <button
        onClick={() => {
          navigate("/");
        }}
      >
        홈 버튼
      </button> */}
      <Button
        _onClick={() => {
          navigate("/");
        }}
        margin="0 0 10px"
        width="45px"
        height="45px"
        bg="#fbfbfb"
        color="#ff6f61"
        border="1px solid #e7e7e7"
      >
        Home
      </Button>
      <div>PracDetail</div>
      <div className="list-container">
        <h2>작성자 : {postUser[indexId].writer}</h2>

        <div className="list-wrapper"></div>
        <div className="button-set">
          <h2> {postUser[indexId].title} </h2>
        </div>
        <div> {postUser[indexId].body} </div>
      </div>
      {/* <button
        onClick={() => {
          navigate(`/Update/${paramID.id}`);
        }}
      >
        수정하기
      </button> */}
      <Button
        width="100px"
        height="45px"
        bold="false"
        _onClick={() => {
          navigate(`/Update/${paramID.id}`);
        }}
      >
        수정하기
      </Button>
      {/* <button
        onClick={() => {
          navigate("/List");
        }}
      >
        리스트 페이지로
      </button> */}
      <Button
        width="100px"
        height="45px"
        bold="false"
        _onClick={() => {
          navigate("/List");
        }}
      >
        리스트 보기
      </Button>
      <div>Comment</div>
      <div className="add-form">
        <div className="input-group">
          <label className="input-Text">작성자</label>
          <input
            type="text"
            name="writer"
            className="input"
            value={input.writer || ""}
            onChange={onChangeHandlerInput}
          ></input>

          <label className="input-Text">내용</label>
          <input
            type="text"
            name="comment"
            value={input.comment || ""}
            className="input"
            onChange={onChangeHandlerInput}
          ></input>
        </div>
        {/* <button className="add-button" onClick={onCommentSubmitHandler}>
          댓글 추가하기
        </button> */}
        <Button
          _onClick={onCommentSubmitHandler}
          margin="0 0 10px"
          width="100px"
          height="45px"
          bg="#fbfbfb"
          color="#ff6f61"
          border="1px solid #e7e7e7"
          className="add-button"
        >
          댓글 추가하기
        </Button>
        {/* <button className="add-button" onClick={onResetHandler}>
          Reset
        </button> */}
        <Button
          _onClick={onResetHandler}
          margin="0 0 10px"
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
    </div>
  );
};

export default Detail;
