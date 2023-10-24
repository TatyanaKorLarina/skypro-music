import { createSlice } from "@reduxjs/toolkit";

const tracksSlice = createSlice({
  name: "tracks",
  initialState: {
    
    track: null,
    tracklist: [{}],
    isPlaying: false,
    isShuffleEnabled: false,
    currentPlaylist: [{}],
  },
  reducers: {
    setCurrentAudio: (state, action) => {
      state.track = action.payload;
      
    },


    setPlayingStatus (state, action)  {
      if (state.isPlaying === action.payload) {
        return;
      };
      state.isPlaying = !state.isPlaying;
    },


    nextTrack(state, action) {
      console.log(action)
      const currPlaylist = state.isShuffleEnabled
        ? state.currentPlaylist
        : state.tracklist;
      const currTrack = state.track;
      const currentTrackId = currPlaylist.findIndex(
        (track) => track.id == currTrack.id
      );
      if (currentTrackId >= currPlaylist.length - 1) {
        state.track = state.tracklist[0];
      } else {
        state.track = state.tracklist[currentTrackId + 1];
      }
    },
    prevTrack(state, action) {
      console.log(action)
      const currPlaylist = state.isShuffleEnabled
        ? state.currentPlaylist
        : state.tracklist;
      const currTrack = state.track;
      const currentTrackId = currPlaylist.findIndex(
        (track) => track.id == currTrack.id
      );
      if (currentTrackId === 0) {
        state.track = state.tracklist[0];
      } else {
        state.track = state.tracklist[currentTrackId - 1];
      }
    },

    setShuffleStatus: (state, action) => {
      console.log(action)
      state.isShuffleEnabled = !state.isShuffleEnabled;
      const shuffledArray = state.tracklist.map((track) => track);
      state.currentPlaylist = shuffledArray.sort(() => Math.random() - 0.5);
    },

    setTracklist(state, action) {
      state.tracklist = action.payload
    },

  },
});

export const { setCurrentAudio, setPlayingStatus,
  setShuffleStatus, setTracklist, nextTrack, prevTrack } = tracksSlice.actions;
//export const { nextTack, previousTrack } = tracksSlice.actions
export default tracksSlice.reducer;