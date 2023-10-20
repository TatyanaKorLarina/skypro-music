import * as S from './AudioPlayer.styles';
//import { styled } from "styled-components";
import { useRef, useState, useEffect } from "react";

export default function AudioPlayer({ currentTrack, isPlaying,
  setIsPlaying,
  tracks,
  setCurrentTrack,
  trackIndex,
  setTrackIndex, }) {
    console.log (isPlaying)
    console.log (setIsPlaying)
  if (!currentTrack) return null
  if (currentTrack) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [currentDuration, setCurrentDuration] = useState(0);
    const [volume, setVolume] = useState(60);
    const [repeat, setRepeat] = useState(false);
    const audioRef = useRef(null);
    const progressBarRef = useRef(null);
    console.log (isPlaying)
    useEffect(() => {
      if (audioRef) {
        audioRef.current.volume = volume / 100;
      }
    }, [volume, audioRef]);
    const handlePrev = () => {
      if (trackIndex === 0) {
        let lastTrackIndex = tracks.length - 1
        setTrackIndex(lastTrackIndex)
        setCurrentTrack(tracks[lastTrackIndex])
      } else {
        setTrackIndex((prev) => prev - 1)
        setCurrentTrack(tracks[trackIndex - 1])
      }
    }
    const handleNext = () => {
      if (trackIndex >= tracks.length - 1) {
        setTrackIndex(0)
        setCurrentTrack(tracks[0])
      } else {
        setTrackIndex((prev) => prev + 1)
        setCurrentTrack(tracks[trackIndex + 1])
      }
    }
  const handleStart = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleStop = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };


  const handleRepeat = () => {
    if (audioRef.current) {
      audioRef.current.loop = !repeat;
      setRepeat(!repeat);
    } 
      
    
  };

  const isRepeat = () => {
    if (repeat) {
      audioRef.current.loop = true
    } else {
      handleNext()
      
    }
  }

  const togglePlay = isPlaying ? handleStop : handleStart;

  
  const duration = currentTrack.duration_in_seconds;
  
  const handleProgress = () => {
    const currentProgress = audioRef.current.currentTime;
    setCurrentTime(currentProgress);
  };
  const handleProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
  };

  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setCurrentDuration(seconds);
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

  
    return (
      <>
        <audio
          controls
          ref={audioRef}
          src={currentTrack.track_file}
          onTimeUpdate={handleProgress}
          onLoadedMetadata={onLoadedMetadata}
          type="audio/mpeg"
          onEnded={isRepeat}
        ></audio>
        <S.Bar>
          <S.TimeBar>
          {formatTime(currentTime)} /{formatTime(currentDuration)}
          </S.TimeBar>
          <S.BarContent>
          
            <S.BarPlayerProgress type="range"
              min={0}
              max={duration}
              value={currentTime}
              step={0.01}
              ref={progressBarRef}
              onChange={handleProgressChange}
              $color="#ff0000">
            </S.BarPlayerProgress> 
            <S.BarPlayerBlock>
              <S.BarPlayer>
                <S.PlayerControls isPlaying={isPlaying} currentTrack={currentTrack} handleRepeat={handleRepeat}
                repeat={repeat}
                togglePlay={togglePlay}>
                  <S.PlayerBtnPrev >
                    <S.PlayerBtnPrevSvg alt="prev" onClick={handlePrev}>
                      <use xlinkHref="img/icon/sprite.svg#icon-prev" />
                    </S.PlayerBtnPrevSvg>
                  </S.PlayerBtnPrev>
                  <S.PlayerBtnPlay>
                    <S.PlayerBtnPlaySvg alt="play" onClick={togglePlay}>
                    {isPlaying ? (
                      <use xlinkHref="img/icon/sprite.svg#icon-pause"></use>
                    ) : (
                      <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
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
            <use xlinkHref="img/icon/sprite.svg#icon-repeat-active"></use>
          ) : (
            <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
          )}
                    </S.PlayerBtnRepeatSvg>
                  </S.PlayerBtnRepeat>
                  <S.PlayerBtnShuffle>
                    <S.PlayerBtnShuffleSvg alt="shuffle" onClick={() => alert("Еще не реализовано")}>
                      <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
                    </S.PlayerBtnShuffleSvg>
                  </S.PlayerBtnShuffle>
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
                        <use xlinkHref="img/icon/sprite.svg#icon-like" />
                      </S.TrackPlayLikeSvg>
                    </S.TrackPlayLike>
                    <S.TrackPlayDislike>
                      <S.TrackPlayDislikeSvg alt="dislike">
                        <use
                          xlinkHref="img/icon/sprite.svg#icon-dislike"
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
                      <use xlinkHref="img/icon/sprite.svg#icon-volume" />
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
