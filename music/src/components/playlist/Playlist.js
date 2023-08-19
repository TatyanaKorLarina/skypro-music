
import './Playlist.css';

function Playlist(props) {
  return (
    <div className="sidebar__item">
                  <a className="sidebar__link" href="../index.html">
                    <img
                      className="sidebar__img"
                      src={props.imgUrl}
                      alt="day's playlist"
                    />
                  </a>
                </div>
  );
}

export default Playlist;