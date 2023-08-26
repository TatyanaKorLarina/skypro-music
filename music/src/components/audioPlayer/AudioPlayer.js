
import './AudioPlayer.css';
import  styled  from 'styled-components'

const StyledBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(28, 28, 28, 0.5);
`

const StyledBarContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`

const StyledBarPlayerProgress = styled.div`
  width: 100%;
  height: 5px;
  background: #2e2e2e;
`

const StyledBarPlayerBlock = styled.div`
  height: 73px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`

const StyledBarPlayer = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`

const StyledPlayerControls = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
padding: 0 27px 0 31px;
`

function AudioPlayer() {
  return (
    <StyledBar>
          <StyledBarContent>
            <StyledBarPlayerProgress />
            <StyledBarPlayerBlock>
              <StyledBarPlayer>
                <StyledPlayerControls>
                  <div className="player__btn-prev">
                    <svg className="player__btn-prev-svg" alt="prev">
                      <use xlinkHref="img/icon/sprite.svg#icon-prev" />
                    </svg>
                  </div>
                  <div className="player__btn-play _btn">
                    <svg className="player__btn-play-svg" alt="play">
                      <use xlinkHref="img/icon/sprite.svg#icon-play" />
                    </svg>
                  </div>
                  <div className="player__btn-next">
                    <svg className="player__btn-next-svg" alt="next">
                      <use xlinkHref="img/icon/sprite.svg#icon-next" />
                    </svg>
                  </div>
                  <div className="player__btn-repeat _btn-icon">
                    <svg className="player__btn-repeat-svg" alt="repeat">
                      <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
                    </svg>
                  </div>
                  <div className="player__btn-shuffle _btn-icon">
                    <svg className="player__btn-shuffle-svg" alt="shuffle">
                      <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
                    </svg>
                  </div>
                </StyledPlayerControls>

                <div className="player__track-play track-play">
                  <div className="track-play__contain">
                    <div className="track-play__image">
                      <svg className="track-play__svg" alt="music">
                        <use xlinkHref="img/icon/sprite.svg#icon-note" />
                      </svg>
                    </div>
                    <div className="track-play__author">
                      <a className="track-play__author-link" href="http://"
                        >Ты та...</a
                      >
                    </div>
                    <div className="track-play__album">
                      <a className="track-play__album-link" href="http://">Баста</a>
                    </div>
                  </div>

                  <div className="track-play__like-dis">
                    <div className="track-play__like _btn-icon">
                      <svg className="track-play__like-svg" alt="like">
                        <use xlinkHref="img/icon/sprite.svg#icon-like" />
                      </svg>
                    </div>
                    <div className="track-play__dislike _btn-icon">
                      <svg className="track-play__dislike-svg" alt="dislike">
                        <use
                          xlinkHref="img/icon/sprite.svg#icon-dislike"
                         />
                      </svg>
                    </div>
                  </div>
                </div>
              </StyledBarPlayer>
              <div className="bar__volume-block volume">
                <div className="volume__content">
                  <div className="volume__image">
                    <svg className="volume__svg" alt="volume">
                      <use xlinkHref="img/icon/sprite.svg#icon-volume" />
                    </svg>
                  </div>
                  <div className="volume__progress _btn">
                    <input
                      className="volume__progress-line _btn"
                      type="range"
                      name="range"
                    />
                  </div>
                </div>
              </div>
            </StyledBarPlayerBlock>
          </StyledBarContent>
        </StyledBar>
  );
}

export default AudioPlayer;