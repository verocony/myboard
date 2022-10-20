import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  post: [
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
  isLoading: false,
  error: null,
};

export const __getPosts = createAsyncThunk(
  "getPosts",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get("http://localhost:3001/post");
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getComments = createAsyncThunk(
  "getComments",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get("http://localhost:3001/comment");
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addPost = createAsyncThunk(
  "addPost",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post("http://localhost:3001/post", payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addComment = createAsyncThunk(
  "addComment",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3001/comment",
        payload
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deletePost = createAsyncThunk(
  "deletePost",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:3001/post/${payload}`
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteComment = createAsyncThunk(
  "deleteComment",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:3001/comment/${payload}`
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __updatePost = createAsyncThunk(
  "updatePost",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.patch(
        `http://localhost:3001/post/${payload.id}`,
        { ...payload }
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState,

  extraReducers: {
    //__getPosts
    [__getPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [__getPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.post = action.payload;
    },
    [__getPosts.rejected]: (state, action) => {
      state.isLoading = false;
    },
    //__getComments
    [__getComments.pending]: (state) => {
      state.isLoading = true;
    },
    [__getComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comment = action.payload;
    },
    [__getComments.rejected]: (state, action) => {
      state.isLoading = false;
    },
    //__addPost
    [__addPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__addPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.post = [...state.post, { ...action.payload }];
    },
    [__addPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //__addComment
    [__addComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__addComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comment = [...state.comment, { ...action.payload }];
    },
    [__addComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //__deletePost
    [__deletePost.pending]: (state) => {
      state.isLoading = true;
    },
    [__deletePost.fulfilled]: (state, action) => {
      state.isLoading = false;
      const indexId = state.post.findIndex((post) => {
        if (post.id === action.payload) {
          return true;
        }
        return false;
      });

      state.post.splice(indexId, 1);
      state.post = [...state.post];
    },
    [__deletePost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //__deleteComment
    [__deleteComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      const indexId = state.comment.findIndex((comment) => {
        if (comment.id === action.payload) {
          return true;
        }
        return false;
      });
      state.comment.splice(indexId, 1);
      state.comment = [...state.comment];
    },
    [__deleteComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //__updatePost
    [__updatePost.pending]: (state) => {
      state.isLoading = true;
    },
    [__updatePost.fulfilled]: (state, action) => {
      state.isLoading = false;
      const indexId = state.post.findIndex((post) => {
        if (post.id == action.payload.id) {
          return true;
        }
        return false;
      });
      state.post[indexId] = action.payload;

      state.post = [...state.post];
    },
    [__updatePost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
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
