import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


interface VideoState {
  currentVideo: string | null;
}

const initialState: VideoState = {
  currentVideo: null,
};

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    playVideo: (state, action: PayloadAction<string>) => {
      state.currentVideo = action.payload;
    },
    stopVideo: (state) => {
      state.currentVideo = null;
    },
  },
});

export const { playVideo, stopVideo } = videoSlice.actions;
export default videoSlice.reducer;
