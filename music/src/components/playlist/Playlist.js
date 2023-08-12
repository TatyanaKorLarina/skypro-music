import React from 'react';
import './Playlist.css';

const Playlist = (props) => {
  return (
    <div className="sidebar__item">
                  <a className="sidebar__link" href="#">
                    <img
                      className="sidebar__img"
                      src={props.imgUrl}
                      alt="day's playlist"
                    />
                  </a>
                </div>
  );
};

export default Playlist;