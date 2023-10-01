import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useLogin } from "../../contexts/user.jsx";

//import { SideBarPersonal } from "../SideBarPersonal/SideBarPersonal";
//import { categories } from '../playlist/Playlist';
//import { UserContext } from "../../contexts/user.jsx";
import * as S from './Sidebar.styles'
export const categories = [1, 2, 3]
export default function Sidebar() {
  const navigate = useNavigate()
  const { logUser, setLogUser, setIsLogin } = useLogin()
  const handleLogout = () => {
    localStorage.clear()
    setIsLogin(false)
    setLogUser(null)
    navigate('/login', { replace: true })
  }


  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>{logUser}</S.SidebarPersonalName>
        <S.SidebarIcon>
          <S.Logout onClick={handleLogout} alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </S.Logout>
        </S.SidebarIcon>
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
