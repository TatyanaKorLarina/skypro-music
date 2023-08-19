import { useState, useEffect } from 'react'

import AudioPlayer from './components/audioPlayer/AudioPlayer';
import NavMenu from './components/navMenu/NavMenu';
import Tracklist from './components/tracklist/Tracklist';
import Sidebar from './components/sidebar/Sidebar';
import './App.css';

import TracklistSkeleton from './components/tracklistSkeleton/TracklistSkeleton'
import AudioPlayerSkeleton from './components/audioPlayerSkeleton/AudioPlayerSkeleton'
import SidebarSkeleton from './components/sidebarSkeleton/SidebarSkeleton'
import Filter from './components/filter/Filter';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => {
      clearTimeout(timer);
  
    }
  }, []);

  if (isLoading) {
    return (
       
      
        <div className="App">
          <div className="wrapper">
            <div className="container">
              <main className="main">
                <NavMenu />
                <div className="main__centerblock centerblock">
                  <div className="centerblock__search search">
                    <svg className="search__svg">
                      <use xlinkHref="img/icon/sprite.svg#icon-search" />
                    </svg>
                    <input
                      className="search__text"
                      type="search"
                      placeholder="Поиск"
                      name="search"
                    />
                    <div className="sidebar__personal">
                      <div className="sidebar__personal-name">Sergey.Ivanov</div>
                      <div className="sidebar__icon">
                        <svg className="logout" alt="logout">
                          <use xlinkHref="img/icon/sprite.svg#logout" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h2 className="centerblock__h2">Треки</h2>
                  <Filter />
                  <div className="centerblock__content">
                    <div className="content__title playlist-title">
                      <div className="playlist-title__col col01">Трек</div>
                      <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
                      <div className="playlist-title__col col03">АЛЬБОМ</div>
                      <div className="playlist-title__col col04">
                        <svg className="playlist-title__svg" alt="time">
                          <use xlinkHref="img/icon/sprite.svg#icon-watch" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <TracklistSkeleton />
                <SidebarSkeleton />
              </main>
              <AudioPlayerSkeleton />
              <footer className="footer" />
            </div>
          </div>
        </div>
      
    );
  }
  
  
  return ( 
    <div className="App">
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <NavMenu />
          <div className="main__centerblock centerblock">
            <div className="centerblock__search search">
              <svg className="search__svg">
                <use xlinkHref="img/icon/sprite.svg#icon-search" />
              </svg>
              <input
                className="search__text"
                type="search"
                placeholder="Поиск"
                name="search"
              />
              <div className="sidebar__personal">
        <p className="sidebar__personal-name">Sergey.Ivanov</p>
        <div className="sidebar__icon">
          <svg className="logout" alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout" />
          </svg>
        </div>
      </div>
            </div>
            <h2 className="centerblock__h2">Треки</h2>
            <Filter />
            <div className="centerblock__content">
              <div className="content__title playlist-title">
                <div className="playlist-title__col col01">Трек</div>
                <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
                <div className="playlist-title__col col03">АЛЬБОМ</div>
                <div className="playlist-title__col col04">
                  <svg className="playlist-title__svg" alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-watch" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <Tracklist />
          <Sidebar />
        </main>
        <AudioPlayer />
        <footer className="footer" />
      </div>
    </div>
  </div>

);
    }


export default App;
