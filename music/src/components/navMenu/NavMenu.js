//import { Link } from "react-router-dom";
import React from 'react';
//import ReactDOM from 'react-dom';
import * as S from './NavMenu.styles';
//import { useLogin } from "../../contexts/user.jsx";
//import { useNavigate } from 'react-router-dom';
const { useState } = React

//import { NavBarItem } from "../NavBarItem/NavBarItem";
import { NavBarMenu } from "../NavBarMenu/NavBarMenu"
export function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  //const [user, setUser] = useState(null)
  //const navigate = useNavigate()
  //const { setLogUser, setIsLogin } = useLogin();
  /*const handleLogin = () => setLoginUser(localStorage.setItem('user', 'token'))
  const handleLogout = () => {
    setLoginUser(localStorage.clear())
    setIsLogin(false);
    setLogUser(null);
    navigate('/login', { replace: true })
  }*/

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
  {isOpen ? <NavBarMenu /> : null}
</S.MainNav>
    
  );
};

export default NavMenu;