
import './Sidebar.css';

import Playlist from '../playlist/Playlist';

function Sidebar() {
  return (
    <div className="main__sidebar sidebar">
            
            <div className="sidebar__block">
              <div className="sidebar__list">
              <Playlist
        imgUrl="img/playlist01.png"
        
      />
      <Playlist
        imgUrl="img/playlist02.png"
      />
      <Playlist
        imgUrl="img/playlist03.png"
      />
              </div>
            </div>
          </div>
  );
}

export default Sidebar;