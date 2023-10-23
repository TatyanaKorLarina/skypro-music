//import { useEffect, useState } from 'react'
//import { getTracks } from '../../api'
import * as S from './Traclist.styles'
//import Track from '../track/Track';
//import { togglePlayer } from '../../store/tracksSlice'
import { useSelector } from 'react-redux';
import { setCurrentAudio } from "../../../src/store/tracksSlice";
import { useDispatch } from 'react-redux';
function Tracklist({ 
  tracks, 
  //currentTrack, 
  setCurrentTrack,
  
  //isPlaying,
  //setIsPlaying,
  setTrackIndex, 
}) {
  const dispatch = useDispatch();
 const currentAudio = useSelector((state) => state.tracks.track)
 //const setCurrentTrack = dispatch(setCurrentAudio(currentAudio));
 const isPlaying = useSelector((state) => state.tracks.isPlaying);
  return (
    <S.ContentPlaylist> 
      {tracks.map((track, index) => {
        return (
          <S.PlaylistItem 
            key={track.id} 
            onClick={() => {
              dispatch(setCurrentAudio(track))
              setCurrentTrack(track) 
              isPlaying
              //setIsPlaying(isPlaying)
              setTrackIndex(index)
            }}
          >
      
            <S.PlaylistTrack>
              <S.TrackTitle>
                <S.TrackTitleImage>
                {currentAudio.id && currentAudio.id === track.id ? (
                   
                     
                   <S.PlayingDot
                      style={{
                        animationPlayState: isPlaying ? 'running' : 'paused',
                      }}
                    ></S.PlayingDot>
                    
                  ) : (
                    <S.TrackTitleSvg alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </S.TrackTitleSvg>
                  )}
                </S.TrackTitleImage>
                <S.TrackTitleText>
                  <S.TrackTitleLink>
                    {track.name}
                    <S.TrackTitleSpan /></S.TrackTitleLink>
                </S.TrackTitleText>
              </S.TrackTitle>
              <S.TrackAuthor>
                <S.TrackAuthorLink>
                  {track.author}
                </S.TrackAuthorLink>
              </S.TrackAuthor>
              <S.TrackAlbum>
                <S.TrackAlbumLink>
                  {track.album}
                </S.TrackAlbumLink>
              </S.TrackAlbum>
              <S.TrackTime>
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like" />
                </S.TrackTimeSvg>
                <S.TrackTimeText>
                  {Math.floor(track.duration_in_seconds / 60)}:
                    {track.duration_in_seconds % 60 >= 10
                      ? track.duration_in_seconds % 60
                      : '0' + (track.duration_in_seconds % 60)}
                </S.TrackTimeText>
              </S.TrackTime>
            </S.PlaylistTrack>
          </S.PlaylistItem>
        )
      })}
    </S.ContentPlaylist>
   
        
      
    
  
  )
}

export default Tracklist;