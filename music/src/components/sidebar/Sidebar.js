
import './Sidebar.css';

import Playlist from '../playlist/Playlist';

import  styled  from 'styled-components'

const StyledMainSidebar = styled.div`
  max-width: 418px;
  padding: 20px 90px 20px 78px;
`

const StyledSidebarBlock = styled.div`
  height: 100%;
  padding: 40px 0 0 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`

const StyledSidebarList = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`

function Sidebar() {
  return (
    <StyledMainSidebar>
            
            <StyledSidebarBlock>
              <StyledSidebarList>
              <Playlist
        imgUrl="img/playlist01.png"
        
      />
      <Playlist
        imgUrl="img/playlist02.png"
      />
      <Playlist
        imgUrl="img/playlist03.png"
      />
              </StyledSidebarList>
            </StyledSidebarBlock>
          </StyledMainSidebar>
  );
}

export default Sidebar;