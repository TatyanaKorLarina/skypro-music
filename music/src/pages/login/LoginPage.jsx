import { Link } from "react-router-dom";
import * as S from "./LoginPage.styles";
import { fetchLogin } from "../../api";

export const LoginPage = ({
  
  email,
  setEmail,
  password,
  setPassword,
}) => {
  const handleAuth = () => {
    if (!email) {
      alert("Введите логин");
      return;
    }

    if (!password) {
      alert("Введите пароль");
      return;
    }

    fetchLogin(email, password).then((response) => {
      console.log(response);
    });
  };

  return (
    <S.LoginWrap>
      <S.LoginContainer>
        <S.LoginModalBlock>
          <S.LoginModalFormLogin action="#">
            <S.LoginModalLogo>
              <S.LoginModalLogoImg
                src="../img/logo_modal.png"
                alt="logo"
              />
            </S.LoginModalLogo>
            <S.LoginModalInput
              type="text"
              name="login"
              placeholder="Почта"
              onChange={(e) => setEmail(e.target.value)}
            />
            <S.LoginModalInput
              type="password"
              name="password"
              placeholder="Пароль"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link to="/">
              <S.LoginBtnEnter onClick={handleAuth}>Войти</S.LoginBtnEnter>
            </Link>
            <Link to="/register">
              <S.LoginBtnSignup>Зарегистрироваться</S.LoginBtnSignup>
            </Link>
          </S.LoginModalFormLogin>
        </S.LoginModalBlock>
      </S.LoginContainer>
    </S.LoginWrap>
  );
};