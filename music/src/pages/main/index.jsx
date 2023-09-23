import { useState, useEffect } from 'react'

import AudioPlayer from '../../components/audioPlayer/AudioPlayer';
import NavMenu from '../../components/navMenu/NavMenu';
import Tracklist from '../../components/tracklist/Tracklist';
import Sidebar from '../../components/sidebar/Sidebar';

import { getTracks } from '../../api';
import TracklistSkeleton from '../../components/tracklistSkeleton/TracklistSkeleton'
//import AudioPlayerSkeleton from '../../components/audioPlayerSkeleton/AudioPlayerSkeleton'
import SidebarSkeleton from '../../components/sidebarSkeleton/SidebarSkeleton'
import Filter from '../../components/filter/Filter';

import * as S from '../../App.styles'

export const MainPage = ({ categories }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [tracks, setTracks] = useState([]);
  const [tracksError, setTracksError] = useState(null)
  const [currentTrack, setCurrentTrack] = useState(null)
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
                      <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
                      <S.SidebarIcon>
                        <S.Logout alt="logout">
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
                      setCurrentTrack={setCurrentTrack} />
                    )}
                    {!isLoading && (
                    <Sidebar  categories={ categories }/>)}
              </S.Main>
              
              {currentTrack && <AudioPlayer currentTrack={currentTrack} />}
              <footer className="footer" />
            </S.Container>
          </S.Wrapper>
        </S.App> 
      </>
      
        
      
    )
  }
  
  
  
  