import { createSlice } from "@reduxjs/toolkit";
import content from "../content/content";

export const contentSlice = createSlice({
  name: "content",
  initialState: content,
  reducers: {},
});

export default contentSlice.reducer;
