import { createSlice } from "@reduxjs/toolkit";

const tracksSlice = createSlice({
  name: "trcks",
  initialState: {
    
    trck: [],
    tracklist: [],
  },
  reducers: {
    setCurrentAudio(state, action) {
      state.trck[0] = {
        trackData: action.payload,
      }  
    },
    setTracklist(state, action) {
      state.tracklist = action.payload
    },
  },
  
});

export const { setCurrentAudio, setTracklist, } = tracksSlice.actions;
//export const { nextTack, previousTrack } = tracksSlice.actions
export default tracksSlice.reducer;