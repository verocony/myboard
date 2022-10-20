import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteData } from "../redux/modules/postSlice";
import { useNavigate } from "react-router-dom";
import { __getPosts, __deletePost } from "../redux/modules/postSlice";
import Button from "../elements/button";
import useConfirm from "../elements/useConfirm";
import Header from "../components/Header";
import Layout from "../components/Layout";
import styled from "styled-components";
import './List.css'


const List = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const listPost = useSelector((state) => state.post.post);

  const onDeleteHanlder = (Id) => {
    dispatch(__deletePost(Id));
  };

  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("정말 삭제하시겠습니까?", onDeleteHanlder, abort);


  //리스트업
  useEffect(() => {
    dispatch(__getPosts());
  }, [dispatch]);

  return (
    <Layout>
      <div className="list-wrapper">
        {listPost.map((value, index) => {
          // console.log(value);
          return (
            <div key={index} className="todo-container">
          <Button
          width="40px"
          height="45px"
          bold="false"
          bg="transparent"
          color="#ff6f61"
          
          _onClick={() => {
            navigate(`/Detail/${value.id}`);
          }}
        >
          Detail
        </Button>
              <div>
                <h2 className="todo-title">{value.writer}</h2>
                <div>{value.title}</div>
              </div>
              <div className="button-set">
          <Button
          _onClick={() => confirmDelete(value.id)}
          margin="30px 0"
          width="75px"
          height="40px"
          bg="#fbfbfb"
          color="#ff6f61"
          border="1px solid #e7e7e7"
          className="todo-delete-button button"
        >
        Delete
        </Button>
              </div>
            </div>
          );
        })}
      </div>

        <Button
          width="950px"
          height="50px"
          margin="0 25px"
          _onClick={()=> {
            navigate("/Form");
           }}
        >
          입력 페이지로
        </Button>
      </Layout>
  );
};

export default List;
