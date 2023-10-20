import { createSlice } from "@reduxjs/toolkit";

const tracksSlice = createSlice({
  name: "tracks",
  initialState: {
    
    track: [],
  },
  reducers: {
    setCurrentTrack(state, action) {
      state.track = action.payload;
    },
    nextTack(state, action) {state.track = action.payload;},

    previousTrack(state, action) {state.track = action.payload;},
    
  },
});

export const { setCurrentTrack } = tracksSlice.actions;
export const { nextTack, previousTrack } = tracksSlice.actions
export default tracksSlice.reducer;