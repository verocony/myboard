import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [
    {
      id: 1,
      title: "리액트 공부하기",
      body: "해도해도 끝이 없다...",
      isDone: false,
    },
    {
      id: 2,
      title: "진짜로?!",
      body: "아닐껄?",
      isDone: true,
    },
  ],
  comment: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    createData: (state, action) => {
      state.user.push(action.payload);
      state.user = [...state.user];
    },

    createCommentData: (state, action) => {
      state.comment.push(action.payload);
      state.comment = [...state.comment];
    },

    userRevise: (state, action) => {
      state.user.map((value, index, array) => {
        if (value.id === action.payload) {
          value.isDone = !value.isDone;
        }
      });
      state.user = [...state.user];
    },

    deleteData: (state, action) => {
      const indexId = state.user.findIndex((user) => {
        if (user.id === action.payload) {
          return true;
        }
        return false;
      });

      state.user.splice(indexId, 1);
      state.user = [...state.user];
    },

    deleteCommentData: (state, action) => {
      const indexId = state.comment.findIndex((comment) => {
        if (comment.id === action.payload) {
          return true;
        }
        return false;
      });
      state.comment.splice(indexId, 1);
      state.comment = [...state.comment];
    },

    updateData: (state, action) => {
      const indexId = state.user.findIndex((user) => {
        if (user.id == action.payload.id) {
          return true;
        }
        return false;
      });
      state.user[indexId] = action.payload;

      state.user = [...state.user];
    },
  },
});

export const {
  createData,
  userRevise,
  deleteData,
  updateData,
  deleteCommentData,
  createCommentData,
} = postSlice.actions;

export default postSlice.reducer;
