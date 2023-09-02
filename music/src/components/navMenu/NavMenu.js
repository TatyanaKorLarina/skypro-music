import { NavLink } from "react-router-dom";
import React from 'react'
import * as S from './NavMenu.styles'

const { useState } = React



function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (<S.MainNav>
  <S.NavLogo>
    <S.LogoImage src="img/logo.png" alt="logo" />
  </S.NavLogo>
  <S.NavBurger onClick={toggleMenu}>
    <S.BurgerLine />
    <S.BurgerLine />
    <S.BurgerLine />
  </S.NavBurger>
  {isOpen && (
    <S.NavMenu>
      <S.MenuList>
        <S.MenuItem>
          <NavLink to="/main">
            <S.MenuLink>Главное</S.MenuLink>
          </NavLink>
          
        </S.MenuItem>
        <S.MenuItem>
          <NavLink to="/favorites">
            <S.MenuLink>Мой плейлист</S.MenuLink>
          </NavLink>
        
        </S.MenuItem>
        <S.MenuItem>
          <NavLink to="/login">
            <S.MenuLink>Войти</S.MenuLink>
          </NavLink>

        </S.MenuItem>
      </S.MenuList>
    
    </S.NavMenu>
  )}
</S.MainNav>
    
  );
};

export default NavMenu;