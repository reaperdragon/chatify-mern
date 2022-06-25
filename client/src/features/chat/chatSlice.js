import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import api from "../../utils/axios";

export const getAllChats = createAsyncThunk(
  "chat/getAllChats",
  async (_, thunkAPI) => {
    try {
      const resp = await api.get("/api/v1/chat");
      console.log(resp.data);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export const getChat = createAsyncThunk(
  "chat/getChat",
  async (userId, thunkAPI) => {
    console.log(userId);
    try {
      const resp = await api.post("/api/v1/chat", { userId });
      console.log(resp.data);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

const initialState = {
  chats: [],
  isChatLoading: false,
};

export const ChatSlice = createSlice({
  name: "chat",
  initialState,
  extraReducers: {
    [getAllChats.pending]: (state) => {
      state.isChatLoading = true;
    },
    [getAllChats.fulfilled]: (state, { payload }) => {
      state.isChatLoading = false;
      state.chats = [...state.chats, payload];
    },
    [getAllChats.rejected]: (state, { payload }) => {
      state.isChatLoading = false;
      toast.error(payload);
    },

    [getChat.pending]: (state) => {
      state.isChatLoading = true;
    },
    [getChat.fulfilled]: (state, { payload }) => {
      state.isChatLoading = false;
      console.log(payload);
      state.chats = [...state.chats, payload];
    },
    [getChat.rejected]: (state, { payload }) => {
      state.isChatLoading = false;
      toast.error(payload);
    },
  },
});

export default ChatSlice.reducer;
