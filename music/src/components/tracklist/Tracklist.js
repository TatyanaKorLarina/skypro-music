import React from 'react';
import './Tracklist.css';
import Track from '../track/Track.js';

const Tracklist = () => {
  return (
    <div className="main__centerblock centerblock">
    <div className="centerblock__search search">
      <svg className="search__svg">
        <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
      </svg>
      <input
        className="search__text"
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </div>
    <h2 className="centerblock__h2">Треки</h2>
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <div className="filter__button button-author _btn-text">
        исполнителю
      </div>
      <div className="filter__button button-year _btn-text">
        году выпуска
      </div>
      <div className="filter__button button-genre _btn-text">жанру</div>
    </div>
    <div className="centerblock__content">
      <div className="content__title playlist-title">
        <div className="playlist-title__col col01">Трек</div>
        <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
        <div className="playlist-title__col col03">АЛЬБОМ</div>
        <div className="playlist-title__col col04">
          <svg className="playlist-title__svg" alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
          </svg>
        </div>
      </div>
      <div className="content__playlist playlist">
      <Track
        trackTitle="Guilt"
        trackAuthor="Nero"
        trackAlbum="Welcome Reality"
        trackTime="4:44"
      />
      <Track
        trackTitle="Elektro"
        trackAuthor="Dynoro, Outwork, Mr. Gee"
        trackAlbum="Elektro"
        trackTime="2:22"
      />
      <Track
        trackTitle="Im Fire"
        trackAuthor="Ali Bakgor"
        trackAlbum="Im Fire"
        trackTime="2:22"
      />
      <Track
        trackTitle="Non Stop (Remix)"
        trackAuthor="Стоункат, Psychopath"
        trackAlbum="Non Stop"
        trackTime="4:12"
      />
      <Track
        trackTitle="Run Run (feat. AR/CO)"
        trackAuthor="Jaded, Will Clarke, AR/CO"
        trackAlbum="Run Run"
        trackTime="2:54"
      />
      <Track
        trackTitle="Eyes on Fire (Zeds Dead Remix)"
        trackAuthor="Blue Foundation, Zeds Dead"
        trackAlbum="Eyes on Fire"
        trackTime="5:20"
      />
      <Track
        trackTitle="Mucho Bien (Hi Profile Remix)"
        trackAuthor="HYBIT, Mr. Black, Offer Nissim, Hi Profile"
        trackAlbum="Mucho Bien"
        trackTime="3:41"
      />
      <Track
        trackTitle="Knives n Cherries"
        trackAuthor="minthaze"
        trackAlbum="Captivating"
        trackTime="1:48"
      />
      <Track
        trackTitle="Knives n Cherries"
        trackAuthor="minthaze"
        trackAlbum="Captivating"
        trackTime="1:48"
      />
      <Track
        trackTitle="How Deep Is Your Love"
        trackAuthor="Calvin Harris, Disciples"
        trackAlbum="How Deep Is Your Love"
        trackTime="3:32"
      />
      <Track
        trackTitle="Morena"
        trackAuthor="Tom Boxer"
        trackAlbum="Soundz Made in Romania"
        trackTime="3:36"
      />
          <div className="playlist__track track">
            <div className="track__title">
              <div className="track__title-image">
                <svg className="track__title-svg" alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                </svg>
              </div>
              <div className="track__title-text">
                <a className="track__title-link" href="http://">
                  <span className="track__title-span"></span
                ></a>
              </div>
            </div>
            <div className="track__author">
              <a className="track__author-link" href="http://"></a>
            </div>
            <div className="track__album">
              <a className="track__album-link" href="http://"></a>
            </div>
            <div className="track__time">
              <svg className="track__time-svg" alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
              </svg>
              <span className="track__time-text"></span>
            </div>
          </div>
        
      </div>
    </div>
  </div>
  );
};

export default Tracklist;