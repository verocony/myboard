import { configureStore } from "@reduxjs/toolkit";
import post from "../modules/postSlice";

const store = configureStore({
  reducer: { post },

  //배포모드에서 리덕스 데브툴 사용 안함
  devtools: process.env.REACT_APP_MOD !== "production",
});

export default store;
