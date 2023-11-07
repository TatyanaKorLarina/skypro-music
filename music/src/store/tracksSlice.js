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


    setPlayingStatus: (state, action) =>  {
      if (state.isPlaying === action.payload) {
        return;
      }
      state.isPlaying = !state.isPlaying;
    },


    nextTrack(state, action) {
      console.log(action);
      const currPlaylist = state.isShuffleEnabled
        ? state.currentPlaylist
        : state.tracklist;
      const currTrack = state.track;
      const currentTrackIndex = currPlaylist.findIndex(
        (track) => track.id === currTrack.id
      );

      if (currentTrackIndex >= 0 && currentTrackIndex < currPlaylist.length - 1) {
        state.track = currPlaylist[currentTrackIndex + 1];
      } else {
        state.track = currPlaylist[0];
      }
    },
    prevTrack(state, action) {
      console.log(action);
      const currPlaylist = state.isShuffleEnabled
        ? state.currentPlaylist
        : state.tracklist;
      const currTrack = state.track;
      const currentTrackId = currPlaylist.findIndex((track) => track.id === currTrack.id);

      if (currentTrackId === 0) {
        state.track = state.tracklist[0];
      } else if (currentTrackId !== -1) { // Проверка на -1, если трек не найден
        state.track = state.tracklist[currentTrackId - 1];
      }
    },
    setShuffleStatus: (state, action) => {
      console.log(action)
      state.isShuffleEnabled = !state.isShuffleEnabled;
      const shuffledArray = [...state.tracklist]; // Создаем копию массива
      state.currentPlaylist = shuffledArray.sort(() => Math.random() - 0.5);
    },

    setTracklist: (state, action) => {
      state.tracklist = action.payload;
    },

  },
});

export const { setCurrentAudio, setPlayingStatus,
  setShuffleStatus, setTracklist, nextTrack, prevTrack } = tracksSlice.actions;
//export const { nextTack, previousTrack } = tracksSlice.actions
export default tracksSlice.reducer;