
import * as S from './Playlist.styles'


function Playlist(props) {
  return (
    <S.SidebarItem>
                  <S.SidebarLink href="../index.html">
                    <S.SidebarImg
                      src={props.imgUrl}
                      alt="day's playlist"
                    />
                  </S.SidebarLink>
                </S.SidebarItem>
  );
}

export default Playlist;