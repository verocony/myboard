import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createData } from "../redux/modules/postSlice";
import { useNavigate } from "react-router-dom";
import { __addPost } from "../redux/modules/postSlice";
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



      <div>Form</div>

      <div className="add-form">
        <div className="input-group">
          <label className="input-Text">작성자</label>
          <input
            type="text"
            name="writer"
            className="input"
            value={input.writer || ""}
            onChange={onChangeHandlerInput}
            placeholder="이름 입력(10자 이내)"
            maxLength="10"
          ></input>
          <label className="input-Text">제목</label>
          <input
            type="text"
            name="title"
            className="input"
            value={input.title || ""}
            onChange={onChangeHandlerInput}
            placeholder="제목 입력(30자 이내)"
            maxLength="30"
          ></input>
          <label className="input-Text">내용</label>
          <input
            type="text"
            name="body"
            value={input.body || ""}
            className="input"
            onChange={onChangeHandlerInput}
            placeholder="내용 입력(200자 이내)"
            maxLength="200"
          ></input>
        </div>
        {/* <button className="add-button" onClick={onSubmitHandler}>
          추가하기
        </button>
        <button className="add-button" onClick={onSubmitHandler}>
          Reset
        </button> */}
         <Button
          _onClick={onSubmitHandler}
          margin="0 0 10px"
          width="100px"
          height="45px"
          bg="#fbfbfb"
          color="#ff6f61"
          border="1px solid #e7e7e7"
          className="add-button"
        >
          추가하기
        </Button>
        <Button
          _onClick={onSubmitHandler}
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
          _onClick={()=> {
            navigate("/List")}}
          margin="0 0 10px"
          width="100px"
          height="45px"
          bg="#fbfbfb"
          color="#ff6f61"
          border="1px solid #e7e7e7"
        >
          리스트 보기
        </Button>
    </div>
  );
};

export default Form;
