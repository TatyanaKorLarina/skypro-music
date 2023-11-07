import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AudioPlayer from '../components/audioPlayer/AudioPlayer';
import NavMenu from '../components/navMenu/NavMenu';
import Tracklist from '../components/tracklist/Tracklist';
import Sidebar from '../components/sidebar/Sidebar';
import { useAuth } from '../Contexts/AuthContext'
import { getTracks, getMySongs } from '../api';
//import TracklistSkeleton from '../components/tracklistSkeleton/TracklistSkeleton'
import AudioPlayerSkeleton from '../components/audioPlayerSkeleton/AudioPlayerSkeleton'
import SidebarSkeleton from '../components/sidebarSkeleton/SidebarSkeleton'
import Filter from '../components/filter/Filter';
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentAudio, setTracklist }  from '../store/tracksSlice'
import * as S from '../App.styles'
import { Outlet, useLocation } from 'react-router-dom'
//import { Link } from 'react-router-dom'
export const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tracks, setTracks] = useState([]);
  const [tracksError, setTracksError] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [mySongs, setMySongs] = useState([])
  const [likeInd, setLikeInd] = useState([])
  const navigate = useNavigate()
  const { authUser, setAuthUser, isLogIn, setIsLogIn } = useAuth()
  console.log (isLogIn)
  const logout = () => {
    localStorage.clear()
    setIsLogIn(false)
    setAuthUser(null)
    navigate('/login', { replace: true })
  }
  useEffect(() => {
    getTracks()
      .then((tracks) => {
        setTracks(tracks)
        
      })
      .then(() => setIsLoading(false))
      .catch((error) => {
        setTracksError(error.message)
        setIsLoading(false)
      })
    getMySongs(localStorage.user)
      .then((mySongs) => {
        setMySongs(mySongs)
        getLikeInd()
        //console.log(mySongs)
      })
      .then(() => setIsLoading(false))
      .catch((error) => {
        if (
          error.message === 'Данный токен недействителен для любого типа токена'
        ) {
          navigate('/login', { replace: true })
          return
        }
        setTracksError(error.message)
        setIsLoading(false)
      })
  }, [])

  const getLikeInd = () => {
    for (let mySong of mySongs) {
      setLikeInd((likeInd) => [...likeInd, mySong.id])
    }
    let array = []
    let count = 0
    let start = false
    for (let j = 0; j < likeInd.length; j++) {
      for (let k = 0; k < array.length; k++) {
        if (likeInd[j] == array[k]) {
          start = true
        }
      }
      count++
      if (count == 1 && start == false) {
        array.push(likeInd[j])
      }
      start = false
      count = 0
      setLikeInd(array)
    }
  }

  useEffect(() => {
    getLikeInd()
  }, [mySongs])

  const dispatch = useDispatch();
  const currentAudio = useSelector((state) => state.tracks.track)
  const setCurrentTrack = dispatch(setCurrentAudio(currentAudio));
  //let isPlaying = useSelector((state) => state.tracks.isPlaying);


  //getTracks().then((tracks) => console.log(tracks));
  //const currentAudio = useSelector((state) => state.tracks.track)
  const [trackIndex, setTrackIndex] = useState(null)
  //const [currentTrack, setCurrentTrack] = useState(currentAudio)
  const addSong = () => dispatch(setCurrentAudio(currentAudio))
  //console.log(setCurrentAudio)
  //const dispatch = useDispatch()
  //const setCurrentTrack = () => dispatch(setCurrentAudio(currentAudio))
  const addTrackList = () => dispatch(setTracklist(tracks))
  addSong()
  //setCurrentTrack()
  useEffect(() => {
    addTrackList()
  }, [currentAudio])
  const location = useLocation()
  return (
      <>
      <S.GlobalStyle />
       <S.App>
          <S.Wrapper>
            <S.Container>
              <S.Main>
                <NavMenu />
                <S.MainCenterblock>
                  <S.CenterblockSearch>
                    <S.SearchSvg>
                      <use xlinkHref="/img/icon/sprite.svg#icon-search" />
                    </S.SearchSvg>
                    <S.SearchText
                      type="search"
                      placeholder="Поиск"
                      name="search"
                    />
                    <S.SidebarPersonal>
                    <S.SidebarPersonalName>{authUser}</S.SidebarPersonalName>
                      <S.SidebarIcon>
                      <S.Logout onClick={logout} alt="logout">
                          <use xlinkHref="/img/icon/sprite.svg#logout" />
                        </S.Logout>
                      </S.SidebarIcon>
                    </S.SidebarPersonal>
                  </S.CenterblockSearch>
                  <S.CenterblockH2></S.CenterblockH2>
                  <S.CenterblockH2>
                {location.pathname === '/' ? 'Треки' : 'Мои треки'}
              </S.CenterblockH2>
                  <Filter />
                  <S.CenterblockContent>
                    <S.ContentTitle>
                      <S.PlaylistTitleCol1>Трек</S.PlaylistTitleCol1>
                      <S.PlaylistTitleCol2>ИСПОЛНИТЕЛЬ</S.PlaylistTitleCol2>
                      <S.PlaylistTitleCol3>АЛЬБОМ</S.PlaylistTitleCol3>
                      <S.PlaylistTitleCol4>
                        <S.PlaylistTitleSvg alt="time">
                          <use xlinkHref="/img/icon/sprite.svg#icon-watch" />
                        </S.PlaylistTitleSvg>
                      </S.PlaylistTitleCol4>
                    </S.ContentTitle>
                    <Outlet
                  context={[
                    tracks,
                    setTracks,
                    setCurrentTrack,
                    //currentTrack,
                    isPlaying,
                    setIsPlaying,
                    setTrackIndex,
                    trackIndex,
                    tracksError,
                    isLoading,
                    mySongs,
                    setMySongs,
                    location,
                    likeInd,
                    setLikeInd,
                  ]}
                />
                  </S.CenterblockContent>
                </S.MainCenterblock>
                
                    {isLoading && <SidebarSkeleton />}
                    
                    {!isLoading && 
                    <Sidebar />}
                    {!isLoading && currentAudio && (
                      <Tracklist 
                      tracks={tracks} 
                      setTracks={setTracks}
                      mySongs={mySongs}
                      setMySongs={setMySongs}
                      trackIndex={trackIndex}
                      location={location}
                      likeInd={likeInd}
                      setLikeInd={setLikeInd}
                      setCurrentTrack={setCurrentTrack}
                      //currentTrack={currentTrack}
                      isPlaying={isPlaying}
                      setIsPlaying={setIsPlaying}
                      setTrackIndex={setTrackIndex}
                      tracksError={tracksError}
                      />
                    )}
              </S.Main>
              {isLoading && <AudioPlayerSkeleton />}

              {currentAudio &&  (
                <AudioPlayer 
                  //currentTrack={currentTrack} isPlaying={isPlaying}
                  setIsPlaying={setIsPlaying}
                  tracks={tracks}
                  setCurrentTrack={setCurrentTrack}
                  trackIndex={trackIndex}
                  setTrackIndex={setTrackIndex} 
                  mySongs={mySongs}
                  location={location}
                />
              )}
              <footer className="footer" />
            </S.Container>
          </S.Wrapper>
        </S.App> 
      </>
      
        
      
    )
  }
  
  