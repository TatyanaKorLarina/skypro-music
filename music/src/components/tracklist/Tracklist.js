
import './Tracklist.css';
import Track from '../track/Track';


function Tracklist() {
  return (

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
                  <use xlinkHref="img/icon/sprite.svg#icon-note" />
                </svg>
              </div>
              <div className="track__title-text">
                <a className="track__title-link" href="http://" >
                  <span className="track__title-span" /></a>
              </div>
            </div>
            <div className="track__author">
            <a className="track__author-link" href="http://" >
                  <span className="track__author-span" /></a>
            </div>
            <div className="track__album">
            <a className="track__album-link" href="http://" >
                  <span className="track__album-span" /></a>
            </div>
            <div className="track__time">
              <svg className="track__time-svg" alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like" />
              </svg>
              <span className="track__time-text" />
            </div>
          </div>
        
      </div>
    
  
  );
}

export default Tracklist;