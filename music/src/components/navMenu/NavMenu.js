import { NavLink } from "react-router-dom";
import React from 'react'
import * as S from './NavMenu.styles'
import { useNavigate } from 'react-router-dom'
const { useState } = React



function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  const handleLogin = () => setUser(localStorage.setItem('user', 'token'))
  const handleLogout = () => {
    setUser(localStorage.clear())
    navigate('/login', { replace: true })
  }

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
          <NavLink to="/">
            <S.MenuLink>Главное</S.MenuLink>
          </NavLink>
          
        </S.MenuItem>
        <S.MenuItem>
          <NavLink to="/favorites">
            <S.MenuLink>Мой плейлист</S.MenuLink>
          </NavLink>
        
        </S.MenuItem>
        <S.MenuItem user={user}>
              {localStorage.getItem('user') ? (
                <S.MenuLink onClick={handleLogout}>Выйти</S.MenuLink>
              ) : (
                
                <S.MenuLink onClick={handleLogin}>Войти</S.MenuLink>
              )}

        </S.MenuItem>
      </S.MenuList>
    
    </S.NavMenu>
  )}
</S.MainNav>
    
  );
};

export default NavMenu;