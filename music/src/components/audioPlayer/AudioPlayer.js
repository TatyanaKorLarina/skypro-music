import * as S from './AudioPlayer.styles';
//import { styled } from "styled-components";
import { useRef, useState, useEffect, useCallback } from "react";
import { setShuffleStatus } from "../../../src/store/tracksSlice";
import { useDispatch, useSelector } from 'react-redux';

//const dispatch = useDispatch();
 
export default function AudioPlayer({  
  isPlaying,
  setIsPlaying,
  tracks,
  currentTrack,
  setCurrentTrack, 
  //mySongs,  
  trackIndex,
  setTrackIndex,
  //location,
 }) {
  const audioRef = useRef();
  const progressBarRef = useRef();
  let list = tracks
  const getTracklistFromStore = () => {
    list = useSelector((state) => state.tracks.tracklist)
    return list
  }


  const dispatch = useDispatch();
    /*const currentTrack = useSelector((state) => state.tracks.track);
    
 //const currentTrack = useSelector((state) => state.tracks.track);
 const setCurrentTrack = dispatch(setCurrentAudio(currentTrack));
 console.log(setCurrentTrack)
 const isPlaying = useSelector((state) => state.tracks.isPlaying);
  const isShuffled = useSelector((state) => state.tracks.isShuffleEnabled);
    //console.log (isPlaying)
    //console.log (setIsPlaying)*/
  if (!currentTrack) return null
  if (currentTrack) {
    getTracklistFromStore()
    //const [isPlaying, setIsPlaying] = useState(false);
    //const [currentTime, setCurrentTime] = useState(0);
    //const [currentDuration, setCurrentDuration] = useState(0);
    //const [volume, setVolume] = useState(60);
    //const [repeat, setRepeat] = useState(false);
    //const audioRef = useRef();
    const togglePlayPause = () => {
      setIsPlaying(() => !isPlaying)
    }
    useEffect(() => {
      if (isPlaying) {
        audioRef.current.play()
      } else {
        audioRef.current.pause()
      }
    }, [isPlaying, audioRef])
    //const progressBarRef = useRef();


    //const duration = currentTrack.duration_in_seconds;
    //console.log (isPlaying)
    /*useEffect(() => {
      if (audioRef) {
        audioRef.current.volume = volume / 100;
      }
    }, [volume, audioRef]);



    useEffect(() => {
    if (currentTrack.id) {
      dispatch(setPlayingStatus(true));
      return;
    } else {
      dispatch(setPlayingStatus(false));
    }
  }, [currentTrack.id]);*/

  /*useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, audioRef, currentTrack.id]);*/


    const handlePrev = () => {
      if (isShuffled) {
        shuffled()
      } else if (trackIndex === 0) {
        return
      } else {
        setTrackIndex((prev) => prev - 1)
        setCurrentTrack(list[trackIndex - 1])
      }
    }
//    console.log(handlePrev)
    const handleNext = () => {
      if (isShuffled) {
        shuffled()
      } else if (trackIndex >= list.length - 1) {
        return
      } else {
        setTrackIndex((prev) => prev + 1)
        setCurrentTrack(list[trackIndex + 1])
      }
    }

    const [isShuffled, setIsShuffled] = useState(false)
    const getRandomSong = (max) => {
      return Math.floor(Math.random() * max)
    }
   const handleShuffle = () => {
      setIsShuffled(!isShuffled)
    }
    const shuffled = () => {
      if (isShuffled) {
        let ind = getRandomSong(list.length)
        setCurrentTrack(list[ind])
       
        trackIndex = ind
        console.log(
          `рандомный индекс${ind}, установленный индекс ${trackIndex}`,
        )
      }
      
    }
  /*const handleStart = () => {
    if (audioRef.current) {
      audioRef.current.play();
      //setIsPlaying(true);
    }
  };

  const handleStop = () => {
    audioRef.current.pause();
    //setIsPlaying(false);
  };*/


  const handleRepeat = () => {
    
      audioRef.current.loop = !audioRef.current.loop;
      setIsRepeat(!isRepeat);
    
      
    
  };

  const isRepeating = () => {
    if (isRepeat) {
      audioRef.current.loop = true
    } else {
     handleNext()
      
    }
  }
/*console.log(isRepeat)
console.log(shuffled)
  const togglePlay = isPlaying ? handleStop : handleStart;

  
  const duration = currentTrack.duration_in_seconds;
  
  const handleProgress = () => {
    const currentProgress = audioRef.current.currentTime;
    setCurrentTime(currentProgress);
  };*/
  const handleProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
  };


  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };

  const formatTime = (time) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return "00:00";
  };
const playAnimationRef = useRef()

const repeat = useCallback(() => {
  const currentTime = audioRef.current.currentTime
  setCurrentTime(currentTime)
  progressBarRef.current.value = currentTime
  progressBarRef.current.style.setProperty(
    '--range-progress',
    `${(progressBarRef.current.value / duration) * 100}%`,
  )
  playAnimationRef.current = requestAnimationFrame(repeat)
}, [audioRef, duration, progressBarRef, setCurrentTime])

useEffect(() => {
  if (isPlaying) {
    audioRef.current.play()
  } else {
    audioRef.current.pause()
  }
  playAnimationRef.current = requestAnimationFrame(repeat)
}, [isPlaying, audioRef, repeat])
const [volume, setVolume] = useState(60)
useEffect(() => {
  if (audioRef) {
    audioRef.current.volume = volume / 100
  }
}, [volume, audioRef])
let [isRepeat, setIsRepeat] = useState(false)


    return (
      <>
        <audio
          //controls
          ref={audioRef}
          src={currentTrack.track_file}
          //onTimeUpdate={handleProgress}
          onLoadedMetadata={onLoadedMetadata}
          type="audio/mpeg"
          onEnded={() => {
            isRepeating()
            shuffled()
          }}
        ></audio>
        <S.Bar>
          <S.TimeBar>
          {formatTime(currentTime)} /{formatTime(duration)}
          </S.TimeBar>
          <S.BarContent>
          
            <S.BarPlayerProgress type="range"
              //min={0}
              //max={duration}
              //value={currentTime}
              defaultValue="0"
              //step={0.01}
              ref={progressBarRef}
              onChange={handleProgressChange}
              $color="#ff0000">
            </S.BarPlayerProgress> 
            <S.BarPlayerBlock>
              <S.BarPlayer>
                <S.PlayerControls >
                  <S.PlayerBtnPrev >
                    <S.PlayerBtnPrevSvg alt="prev" onClick={handlePrev}>
                      <use xlinkHref="/img/icon/sprite.svg#icon-prev" />
                    </S.PlayerBtnPrevSvg>
                  </S.PlayerBtnPrev>
                  <S.PlayerBtnPlay>
                    <S.PlayerBtnPlaySvg alt="play" onClick={togglePlayPause}>
                    {isPlaying ? (
                      <use xlinkHref="/img/icon/sprite.svg#icon-pause"></use>
                    ) : (
                      <use xlinkHref="/img/icon/sprite.svg#icon-play"></use>
                    )}
                    </S.PlayerBtnPlaySvg>
                  </S.PlayerBtnPlay>
                  <S.PlayerBtnNext >
                    <S.PlayerBtnNextSvg alt="next" onClick={handleNext}>
                      <use xlinkHref="img/icon/sprite.svg#icon-next" />
                    </S.PlayerBtnNextSvg>
                  </S.PlayerBtnNext>
                  <S.PlayerBtnRepeat>
                    <S.PlayerBtnRepeatSvg onClick={handleRepeat} alt="repeat">
                    {repeat ? (
            <use xlinkHref="/img/icon/sprite.svg#icon-repeat-active"></use>
          ) : (
            <use xlinkHref="/img/icon/sprite.svg#icon-repeat"></use>
          )}
                    </S.PlayerBtnRepeatSvg>
                  </S.PlayerBtnRepeat>
                  {isShuffled ? (
                  <S.PlayerBtnShuffle
                  onClick={() => dispatch(setShuffleStatus())}
                    className="_btn-icon"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                    >
                      <path
                        d="M19.0005 15.7031L14.0005 12.8164V18.5899L19.0005 15.7031ZM9.66366 12.7864L9.20912 12.9947L9.66366 12.7864ZM6.83732 6.61985L6.38279 6.82818L6.83732 6.61985ZM0.000488281 4.20312H2.292V3.20312H0.000488281V4.20312ZM6.38279 6.82818L9.20912 12.9947L10.1182 12.5781L7.29185 6.41152L6.38279 6.82818ZM14.209 16.2031H14.5005V15.2031H14.209V16.2031ZM9.20912 12.9947C10.1052 14.9497 12.0584 16.2031 14.209 16.2031V15.2031C12.4494 15.2031 10.8513 14.1776 10.1182 12.5781L9.20912 12.9947ZM2.292 4.20312C4.05153 4.20312 5.64967 5.22864 6.38279 6.82818L7.29185 6.41152C6.39582 4.45654 4.44254 3.20312 2.292 3.20312V4.20312Z"
                        fill="white"
                      />
                      <path
                        d="M19.0005 3.70312L14.0005 6.58988V0.816374L19.0005 3.70312ZM9.66366 6.61985L9.20912 6.41152L9.66366 6.61985ZM6.83732 12.7864L6.38279 12.5781L6.83732 12.7864ZM0.000488281 15.2031H2.292V16.2031H0.000488281V15.2031ZM6.38279 12.5781L9.20912 6.41152L10.1182 6.82818L7.29185 12.9947L6.38279 12.5781ZM14.209 3.20312H14.5005V4.20312H14.209V3.20312ZM9.20912 6.41152C10.1052 4.45654 12.0584 3.20312 14.209 3.20312V4.20312C12.4494 4.20312 10.8513 5.22864 10.1182 6.82818L9.20912 6.41152ZM2.292 15.2031C4.05153 15.2031 5.64967 14.1776 6.38279 12.5781L7.29185 12.9947C6.39582 14.9497 4.44254 16.2031 2.292 16.2031V15.2031Z"
                        fill="white"
                      />
                    </svg>
                  </S.PlayerBtnShuffle>
                ) : (
                  <S.PlayerBtnShuffle
                  onClick={handleShuffle}
                    className="_btn-icon"
                  >
                    <S.PlayerBtnShuffleSvg alt="shuffle">
                      <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                    </S.PlayerBtnShuffleSvg>
                  </S.PlayerBtnShuffle>
                )}
                </S.PlayerControls>

                <S.PlayerTrackPlay currentTrack={currentTrack}>
                  <S.TrackPlayContain>
                    <S.TrackPlayImage>
                      <S.TrackPlaySvg alt="music">
                        <use xlinkHref="img/icon/sprite.svg#icon-note" />
                      </S.TrackPlaySvg>
                    </S.TrackPlayImage>
                    <S.TrackPlayAuthor>
                      <S.TrackPlayAuthorLink href="http://"
                        >{currentTrack.name}</S.TrackPlayAuthorLink>
                    </S.TrackPlayAuthor>
                    <S.TrackPlayAlbum>
                      <S.TrackPlayAlbumLink href="http://">{currentTrack.author}</S.TrackPlayAlbumLink>
                    </S.TrackPlayAlbum>
                    
                  </S.TrackPlayContain>

                  <S.TrackPlayLikeDis>
                    <S.TrackPlayLike>
                      <S.TrackPlayLikeSvg alt="like">
                        <use xlinkHref="/img/icon/sprite.svg#icon-like" />
                      </S.TrackPlayLikeSvg>
                    </S.TrackPlayLike>
                    <S.TrackPlayDislike>
                      <S.TrackPlayDislikeSvg alt="dislike">
                        <use
                          xlinkHref="/img/icon/sprite.svg#icon-dislike"
                         />
                      </S.TrackPlayDislikeSvg>
                    </S.TrackPlayDislike>
                  </S.TrackPlayLikeDis>
                </S.PlayerTrackPlay>
              </S.BarPlayer>
              <S.BarVolumeBlock volume={volume}
              setVolume={setVolume}>
                <S.VolumeContent>
                  <S.VolumeImage>
                    <S.VolumeSvg alt="volume">
                      <use xlinkHref="/img/icon/sprite.svg#icon-volume" />
                    </S.VolumeSvg>
                  </S.VolumeImage>
                  <S.VolumeProgress>
                    <S.VolumeProgressLine
                      type="range"
                      name="range"
                      min={0}
                      max={100}
                      value={volume}
                      onChange={(e) => setVolume(e.target.value)}
                    />
                  </S.VolumeProgress>
                </S.VolumeContent>
              </S.BarVolumeBlock>
            </S.BarPlayerBlock>
          </S.BarContent>
        </S.Bar>
      </>
      
  )
    }}
