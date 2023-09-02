import { NavLink } from 'react-router-dom';
import * as S from './Playlist.styles'
import { PLAYLISTS } from '../../constants';
export const categories = PLAYLISTS
export default function Playlist({ categories }) {
  return (
    <>
      {categories.map((category) => (
            <S.SidebarItem key={category.id}>
              <NavLink to={`/category/${category.id}`}>
                <S.SidebarLink href={category.playlistImg}>
                  <S.SidebarImg
                    src={`img/playlist0${category.id}.png`}
                    alt="day's playlist"
                  />
                </S.SidebarLink>
              </NavLink>
            </S.SidebarItem>
          ))}
      
    </>
    
  );
}
