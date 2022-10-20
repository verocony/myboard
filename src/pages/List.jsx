import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteData } from "../redux/modules/postSlice";
import { useNavigate } from "react-router-dom";
import { __getPosts, __deletePost } from "../redux/modules/postSlice";

const List = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const listPost = useSelector((state) => state.post.post);

  const onDeleteHanlder = (Id) => {
    dispatch(__deletePost(Id));
  };

  //리스트업
  useEffect(() => {
    dispatch(__getPosts());
  }, [dispatch]);

  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        홈 버튼
      </button>
      <div>PracList</div>

      <div className="list-wrapper">
        {listPost.map((value, index) => {
          // console.log(value);
          return (
            <div key={index} className="todo-container">
              <button
                onClick={() => {
                  navigate(`/Detail/${value.id}`);
                }}
              >
                상세 페이지
              </button>
              <div>
                <h2 className="todo-title">{value.writer}</h2>
                <div>{value.title}</div>
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
        })}
      </div>

      <button
        onClick={() => {
          navigate("/Form");
        }}
      >
        입력 페이지로
      </button>
    </div>
  );
};

export default List;
