import { Link } from 'react-router-dom'
//import { useNavigate } from 'react-router-dom'
import { useLogin } from "../../contexts/user.jsx";

//import { SideBarPersonal } from "../SideBarPersonal/SideBarPersonal";
//import { categories } from '../playlist/Playlist';
//import { UserContext } from "../../contexts/user.jsx";
import * as S from './Sidebar.styles'
export const categories = [1, 2, 3]
export default function Sidebar() {
  //const navigate = useNavigate()
  const { logUser } = useLogin()
  


  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>{logUser}</S.SidebarPersonalName>
        
      </S.SidebarPersonal>
      <S.SidebarBlock>
        <S.SidebarList>
          {categories.map((id) => (
            <S.SidebarItem key={id}>
              <Link to={`/category/${id}`}>
                <S.SidebarLink>
                  <S.SidebarImg
                    src={`img/playlist0${id}.png`}
                    alt="day's playlist"
                  />
                </S.SidebarLink>
              </Link>
            </S.SidebarItem>
          ))}
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  )
}
