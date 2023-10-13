import { Link } from "react-router-dom";
import * as S from "./LoginPage.styles";
import { fetchLogin } from "../../api";
import { useState, useEffect } from "react";

export const LoginPage = ({
  isLoginMode = false,
  email,
  setEmail,
  password,
  setPassword,
  repeatPassword,
  setRepeatPassword,

  setUser,
}) => {
    const [textError, setTextError] = useState(null);

  // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы

  useEffect(() => {
    !textError;
  }, [isLoginMode, email, password, repeatPassword]);

  const handleRegister = async () => {
    alert(`Выполняется регистрация: ${email} ${password}`);
  };
  const handleAuth = () => {
    if (!email) {
      setTextError("Введите логин");
      return;
    }

    if (!password) {
      setTextError("Введите пароль");
      return;
    }

    fetchLogin(email, password).then((response) => {
        setUser(response.username); // передать в Context: response.username
    })
    .catch((error) => {
      setTextError(error.message);
    });
  setTextError("");
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
              <S.PrimaryButton onClick={() => handleAuth}>
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