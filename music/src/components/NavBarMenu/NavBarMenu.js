import { NavLink } from "react-router-dom";
import * as S from "./NavBarMenu.styles.js";
import { NavBarItem } from "../NavBarItem/NavBarItem";

export function NavBarMenu({ switchUser }) {
  return (
    <S.NavMenu>
      <S.MenuList>
        <NavLink to="/">
          <NavBarItem menuName="Главная" />
        </NavLink>
        <NavLink to="/favorites">
          <NavBarItem menuName="Мой плейлист" />
        </NavLink>
        <NavLink
          onClick={switchUser}
          to="/login"
        >
          <NavBarItem menuName="Выйти" />
        </NavLink>
      </S.MenuList>
    </S.NavMenu>
  );
}