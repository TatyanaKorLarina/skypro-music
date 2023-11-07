//import { useState, useEffect } from 'react'
//import { useNavigate } from 'react-router-dom'
import '../../components/audioPlayer/AudioPlayer';
//import NavMenu from '../../components/navMenu/NavMenu';
import Tracklist from '../../components/tracklist/Tracklist';
//import Sidebar from '../../components/sidebar/Sidebar';
//import { useAuth } from '../../Contexts/AuthContext'
//import { getTracks } from '../../api';
import TracklistSkeleton from '../../components/tracklistSkeleton/TracklistSkeleton'
//import AudioPlayerSkeleton from '../../components/audioPlayerSkeleton/AudioPlayerSkeleton'
//import SidebarSkeleton from '../../components/sidebarSkeleton/SidebarSkeleton'
//import Filter from '../../components/filter/Filter';
//import { useSelector, useDispatch } from 'react-redux'
//import { setCurrentAudio, setTracklist }  from '../../store/tracksSlice'
//import * as S from '../../App.styles'
//import React from 'react';
import { useOutletContext } from 'react-router-dom'

export const MainPage = () => {
  const [
    tracks,
    setCurrentTrack,
    currentAudio,
    isPlaying,
    setIsPlaying,
    setTrackIndex,
    tracksError,
    isLoading,

  ] = useOutletContext()

  return(
    <>
      <p style={{ color: 'red', position: 'relative' }}>{tracksError}</p>
      {isLoading && <TracklistSkeleton />}
      {!isLoading && currentAudio && (
        <Tracklist
          tracks={tracks} 
          setCurrentTrack={setCurrentTrack}
          currentAudio={currentAudio}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          setTrackIndex={setTrackIndex}
          tracksError={tracksError}
          isLoading={isLoading}
          />
      )}
    </>
  )
}
  
  
  