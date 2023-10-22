import { createSlice } from "@reduxjs/toolkit";

const tracksSlice = createSlice({
  name: "tracks",
  initialState: {
    
    track: null,
    tracklist: [],
    isPlaying: false,
    isShuffleEnabled: false,
    currentPlaylist: null,
  },
  reducers: {
    setCurrentAudio: (state, action) => {
      state.track = action.payload;
      
    },


    setPlayingStatus: (state, action) => {
      state.isPlaying = action.payload;
    },
    setShuffleStatus: (state, action) => {
      state.isShuffleEnabled = action.payload;
    },
   

    setTracklist(state, action) {
      state.tracklist = action.payload
    },

  },
  
});

export const { setCurrentAudio, setPlayingStatus,
  setShuffleStatus, setTracklist, } = tracksSlice.actions;
//export const { nextTack, previousTrack } = tracksSlice.actions
export default tracksSlice.reducer;