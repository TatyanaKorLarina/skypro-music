import { Link, useNavigate } from "react-router-dom";
import * as S from "./LoginPage.styles";
import { fetchLogin, fetchReg } from "../../api";
import { useState, useEffect } from "react";

export const LoginPage = ({
  isLoginMode = false,
  email,
  setEmail,
  username,
  setUsername,
  password,
  setPassword,
  repeatPassword,
  setRepeatPassword,
  user,
  setUser
}) => {
  const [textError, setTextError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    setTextError(null);
  }, [isLoginMode, email, password, repeatPassword]);
  
  const getAuth = async () => {
    fetchLogin({ email: email, password: password })
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

    getAuth();
    };


  const getReg = async () => {
    fetchReg({
      username: username,
      email: email,
      password: password,
    })
      .then((response) => {
        setUser(response.username);
      })
      .catch((error) => {
        setTextError(error.message);
      });
    if (username) {
      navigate("/");
      setTextError("");
    }
  };
  console.log(user);

  const handleRegister = async () => {
    if (!email) {
      setTextError("Введите почту");
      return;
    }
    if (!username) {
      setTextError("Введите логин");
      return;
    }
    if (!password) {
      setTextError("Введите пароль");
      return;
    }
    if (!repeatPassword) {
      setTextError("Повторите пароль");
      return;
    }
    if (password !== repeatPassword) {
      setTextError("Повторите корректный пароль");
      return;
    }
    getReg();
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
                type="text"
                name="login"
                placeholder="Логин"
                value={username}
                onChange={(event) => {
                  setUsername(event.target.value);
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