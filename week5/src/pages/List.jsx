import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteData } from "../redux/modules/postSlice";
import { useNavigate } from "react-router-dom";
import { __getPosts, __deletePost } from "../redux/modules/postSlice";
import Button from "../elements/button";
import useConfirm from "../elements/useConfirm";


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
      <div>PracList</div>

      <div className="list-wrapper">
        {listPost.map((value, index) => {
          // console.log(value);
          return (
            <div key={index} className="todo-container">
              {/* <button
                onClick={() => {
                  navigate(`/Detail/${value.id}`);
                }}
              >
                상세 페이지
              </button> */}
          <Button
          width="100px"
          height="45px"
          bold="false"
          _onClick={() => {
            navigate(`/Detail/${value.id}`);
          }}
        >
          상세 페이지
        </Button>
              <div>
                <h2 className="todo-title">{value.writer}</h2>
                <div>{value.title}</div>
              </div>
              <div className="button-set">
                {/* <button
                  className="todo-delete-button button"
                  onClick={() => onDeleteHanlder(value.id)}
                >
                  삭제하기
                </button> */}
          <Button
          _onClick={() => confirmDelete(value.id)}
          margin="0 0 10px"
          width="75px"
          height="45px"
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

      {/* <button
        onClick={() => {
          navigate("/Form");
        }}
      >
        입력 페이지로
      </button> */}
       <Button
          width="100px"
          height="45px"
          bold="false"
          _onClick={() => {
            navigate("/Form");
          }}
        >
          입력 페이지로
        </Button>
    </div>
  );
};

export default List;
