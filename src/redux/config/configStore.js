import { configureStore } from "@reduxjs/toolkit";
import post from "../modules/postSlice";

const store = configureStore({
  reducer: { post: post },
});
console.log(store);

export default store;
