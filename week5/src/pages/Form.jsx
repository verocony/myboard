import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createData } from "../redux/modules/postSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
    dispatch(createData(insertID));
    setInput(initialState);
  };

  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        홈 버튼
      </button>
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
        <button className="add-button" onClick={onSubmitHandler}>
          추가하기
        </button>
        <button className="add-button" onClick={onSubmitHandler}>
          Reset
        </button>
      </div>
      <button
        onClick={() => {
          navigate("/List");
        }}
      >
        리스트 페이지로
      </button>
    </div>
  );
};

export default Form;
