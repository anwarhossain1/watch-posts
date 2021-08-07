import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    posts: "",
  },
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const { setPosts } = userSlice.actions;
export const selectPosts = (state) => state.user.posts;

export default userSlice.reducer;
