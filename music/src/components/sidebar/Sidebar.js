

//import { SideBarPersonal } from "../SideBarPersonal/SideBarPersonal";
import Playlist, { categories } from '../playlist/Playlist';
//import { UserContext } from "../../contexts/user.jsx";
import * as S from './Sidebar.styles'

export default function Sidebar({ isLoading, albums }) {
  return (
    <S.MainSidebar>
      
            <S.SidebarBlock
            isLoading={isLoading}
            albums={albums}>
              <S.SidebarList>
              <Playlist categories={ categories }
        
      />
      
              </S.SidebarList>
            </S.SidebarBlock>
          </S.MainSidebar>
  );
}

