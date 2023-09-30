import { Link, useNavigate } from "react-router-dom";
import * as S from "./LoginPage.styles";
import { fetchLogin } from "../../api";
import { useState } from "react";

export const LoginPage = ({
  isLoginMode = false,
  email,
  setEmail,
  password,
  setPassword,
  repeatPassword,
  setRepeatPassword,
  user,
  setUser,
}) => {
  const [textError, setTextError] = useState(null);
  const navigate = useNavigate();
  const handleRegister = async () => {
    alert(`Выполняется регистрация: ${email} ${password}`);
  };


  const LogReg = async () => {
    fetchLogin(email, password)
      .then((response) => {
        setUser(response.username); 
      })
      .catch((error) => {
        setTextError(error.message);
      });

    if (user) {
      navigate("/");
      setTextError("");
    }
  };

  const handleAuth = async (event) => {
    event.preventDefault();
    if (!email) {
      setTextError("Введите логин");
      return;
    }

    if (!password) {
      setTextError("Введите пароль");
      return;
    }
    if (!repeatPassword && isLoginMode === false) {
      setTextError("Повторите пароль");
      return;
    }

    LogReg();

    
  };

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to={"/login"}>
          <S.LoginModalLogo>
            <S.LoginModalLogoImg
              src="../img/logo_modal.png"
              alt="logo"
            />
          </S.LoginModalLogo>
        </Link>
        {isLoginMode ? (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </S.Inputs>
            <S.LoginError>{textError}</S.LoginError>
            <S.Buttons>
              <S.PrimaryButton onClick={handleAuth}>
                Войти
              </S.PrimaryButton>
              <Link to="/register">
                <S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
              </Link>
            </S.Buttons>
          </>
        ) : (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                value={repeatPassword}
                onChange={(event) => {
                  setRepeatPassword(event.target.value);
                }}
              />
            </S.Inputs>
            <S.LoginError>{textError}</S.LoginError>
            <S.Buttons>
              <S.PrimaryButton onClick={handleRegister}>
                Зарегистрироваться
              </S.PrimaryButton>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  );
};