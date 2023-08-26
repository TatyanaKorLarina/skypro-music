


import Playlist from '../playlist/Playlist';

import * as S from './Sidebar.styles'

function Sidebar() {
  return (
    <S.MainSidebar>
            
            <S.SidebarBlock>
              <S.SidebarList>
              <Playlist
        imgUrl="img/playlist01.png"
        
      />
      <Playlist
        imgUrl="img/playlist02.png"
      />
      <Playlist
        imgUrl="img/playlist03.png"
      />
              </S.SidebarList>
            </S.SidebarBlock>
          </S.MainSidebar>
  );
}

export default Sidebar;