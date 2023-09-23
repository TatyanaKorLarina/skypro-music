import * as S from './AudioPlayer.styles';
//import { styled } from "styled-components";
import { useRef, useState } from "react";

export default function AudioPlayer({ currentTrack }) {
  if (!currentTrack) return null
  if (currentTrack) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const audioRef = useRef(null);
    const progressBarRef = useRef(null);

  const handleStart = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handleStop = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const togglePlay = isPlaying ? handleStop : handleStart;

  
  const duration = currentTrack.duration_in_seconds;
  const minForPlayer = Math.floor(duration / 60);
  const secForPlayer = Math.floor(minForPlayer % 60);
  const handleProgress = () => {
    const currentProgress = audioRef.current.currentTime;
    setCurrentTime(currentProgress);
  };
  const handleProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
  };
    return (
      <>
        <audio
          controls
          ref={audioRef}
          src={currentTrack.track_file}
          onTimeUpdate={handleProgress}
          type="audio/mpeg"
        ></audio>
        <S.Bar>
          <S.TimeBar>
            Current time /{minForPlayer}:{secForPlayer}
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
                <S.PlayerControls 
                togglePlay={togglePlay}>
                  <S.PlayerBtnPrev>
                    <S.PlayerBtnPrevSvg alt="prev">
                      <use xlinkHref="img/icon/sprite.svg#icon-prev" />
                    </S.PlayerBtnPrevSvg>
                  </S.PlayerBtnPrev>
                  <S.PlayerBtnPlay>
                    <S.PlayerBtnPlaySvg alt="play" onClick={togglePlay}>
                      <use xlinkHref="img/icon/sprite.svg#icon-play" />
                    </S.PlayerBtnPlaySvg>
                  </S.PlayerBtnPlay>
                  <S.PlayerBtnNext>
                    <S.PlayerBtnNextSvg alt="next">
                      <use xlinkHref="img/icon/sprite.svg#icon-next" />
                    </S.PlayerBtnNextSvg>
                  </S.PlayerBtnNext>
                  <S.PlayerBtnRepeat>
                    <S.PlayerBtnRepeatSvg alt="repeat">
                      <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
                    </S.PlayerBtnRepeatSvg>
                  </S.PlayerBtnRepeat>
                  <S.PlayerBtnShuffle>
                    <S.PlayerBtnShuffleSvg alt="shuffle">
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
              <S.BarVolumeBlock>
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
                      //value={volume}
                      //onChange={(e) => setVolume(e.target.value)}
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
