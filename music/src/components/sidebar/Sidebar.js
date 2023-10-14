


import Playlist, { categories } from '../playlist/Playlist';

import * as S from './Sidebar.styles'

export default function Sidebar() {
  
  return (
    <S.MainSidebar>
            
            <S.SidebarBlock>
              <S.SidebarList>
              <Playlist categories={ categories }
        
      />
      
              </S.SidebarList>
            </S.SidebarBlock>
          </S.MainSidebar>
  );
}

