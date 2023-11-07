import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AudioPlayer from '../components/audioPlayer/AudioPlayer';
import NavMenu from '../components/navMenu/NavMenu';
import Tracklist from '../components/tracklist/Tracklist';
import Sidebar from '../components/sidebar/Sidebar';
import { useAuth } from '../Contexts/AuthContext'
import { getTracks } from '../api';
import TracklistSkeleton from '../components/tracklistSkeleton/TracklistSkeleton'
//import AudioPlayerSkeleton from '../../components/audioPlayerSkeleton/AudioPlayerSkeleton'
import SidebarSkeleton from '../components/sidebarSkeleton/SidebarSkeleton'
import Filter from '../components/filter/Filter';
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentAudio, setTracklist }  from '../store/tracksSlice'
import * as S from '../App.styles'
import { Outlet } from 'react-router-dom'

export const Layout = ({ categories }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [tracks, setTracks] = useState([]);
  const [tracksError, setTracksError] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
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
  }, [])
  //getTracks().then((tracks) => console.log(tracks));
  const currentAudio = useSelector((state) => state.tracks.track)
  const [trackIndex, setTrackIndex] = useState(null)
  const [currentTrack, setCurrentTrack] = useState(currentAudio)

  console.log(setCurrentAudio)
  const dispatch = useDispatch()
  //const setCurrentTrack = () => dispatch(setCurrentAudio(currentAudio))
  const addTrackList = () => dispatch(setTracklist(tracks))
  //setCurrentTrack()
  useEffect(() => {
    addTrackList()
  }, [currentTrack])
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
                      <use xlinkHref="img/icon/sprite.svg#icon-search" />
                    </S.SearchSvg>
                    <S.SearchText
                      type="search"
                      placeholder="Поиск"
                      name="search"
                    />
                    <S.SidebarPersonal>
                    <S.SidebarPersonalName>{authUser.email}</S.SidebarPersonalName>
                      <S.SidebarIcon>
                      <S.Logout onClick={logout} alt="logout">
                          <use xlinkHref="img/icon/sprite.svg#logout" />
                        </S.Logout>
                      </S.SidebarIcon>
                    </S.SidebarPersonal>
                  </S.CenterblockSearch>
                  <S.CenterblockH2>Треки</S.CenterblockH2>
                  <Filter />
                  <S.CenterblockContent>
                    <S.ContentTitle>
                      <S.PlaylistTitleCol1>Трек</S.PlaylistTitleCol1>
                      <S.PlaylistTitleCol2>ИСПОЛНИТЕЛЬ</S.PlaylistTitleCol2>
                      <S.PlaylistTitleCol3>АЛЬБОМ</S.PlaylistTitleCol3>
                      <S.PlaylistTitleCol4>
                        <S.PlaylistTitleSvg alt="time">
                          <use xlinkHref="img/icon/sprite.svg#icon-watch" />
                        </S.PlaylistTitleSvg>
                      </S.PlaylistTitleCol4>
                    </S.ContentTitle>
                    <Outlet
                  context={[
                    tracks,
                    setCurrentTrack,
                    currentTrack,
                    isPlaying,
                    setIsPlaying,
                    setTrackIndex,
                    tracksError,
                    isLoading,
                  ]}
                />
                  </S.CenterblockContent>
                </S.MainCenterblock>
                <p style={{ color: 'red', position: 'relative' }}>
                      {tracksError}
                    </p>
                    {isLoading && <TracklistSkeleton />}
                    {isLoading && <SidebarSkeleton />}
                    {!isLoading && (
                      <Tracklist 
                        tracks={tracks} 
                        currentTrack={currentTrack}
                        setCurrentTrack={setCurrentTrack}
                        isPlaying={isPlaying}
                        setIsPlaying={setIsPlaying}
                        setTrackIndex={setTrackIndex} 
                      />
                    )}
                    {!isLoading && (
                    <Sidebar  categories={ categories }/>)}
              </S.Main>
              
              {currentTrack &&  (
                <AudioPlayer 
                  currentTrack={currentTrack} isPlaying={isPlaying}
                  setIsPlaying={setIsPlaying}
                  tracks={tracks}
                  setCurrentTrack={setCurrentTrack}
                  trackIndex={trackIndex}
                  setTrackIndex={setTrackIndex} 
                />
              )}
              <footer className="footer" />
            </S.Container>
          </S.Wrapper>
        </S.App> 
      </>
      
        
      
    )
  }
  