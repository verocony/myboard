import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateData } from "../redux/modules/postSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { __updatePost } from "../redux/modules/postSlice";
import Button from "../elements/button";

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
    <div>
      {/* <button
        onClick={() => {
          navigate("/");
        }}
      >
        홈 버튼
      </button> */}
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
      <div>PracUpdate</div>

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
          <label className="input-Text">작성자</label>
          <input
            type="text"
            name="writer"
            className="input"
            value={input.writer || ""}
            onChange={onChangeHandlerInput}
          ></input>
          <label className="input-Text">제목</label>
          <input
            type="text"
            name="title"
            className="input"
            value={input.title || ""}
            onChange={onChangeHandlerInput}
          ></input>
          <label className="input-Text">내용</label>
          <input
            type="text"
            name="body"
            value={input.body || ""}
            className="input"
            onChange={onChangeHandlerInput}
          ></input>
        </div>
        {/* <button className="add-button" onClick={onUpdateHandler}>
          수정하기
        </button> */}
         <Button
         className="add-button"
          width="100px"
          height="45px"
          bold="false"
          _onClick={onUpdateHandler}
        >
          수정하기
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
          _onClick={()=> {
            navigate("/List");
           }}
        >
          리스트 보기
        </Button>
    </div>
  );
};

export default Update;
