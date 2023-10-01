import { Link } from "react-router-dom";
import * as S from "./AuthPage.styles";
import { useState } from "react";
import { fetchReg, getToken } from '../../api';
import { useNavigate } from 'react-router-dom';
import { useLogin } from "../../contexts/user.jsx";
//import './register.css'

export function AuthPage() {
  const [textError, setTextError] = useState(null);
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  console.log(isLoading);

  const { isLogin, setIsLogin } = useLogin();
  const validateForm = () => password === repeatPassword;
  const setUser = (user, token) => {
    localStorage.setItem(user, token)
    navigate('/', { replace: true })
  }


  /*const handleLogin = async ({ email, password }) => {
    alert(`Выполняется вход: ${email} ${password}`);
    setError("Неизвестная ошибка входа");
  };

  const handleRegister = async () => {
    alert(`Выполняется регистрация: ${email} ${password}`);
    setError("Неизвестная ошибка регистрации");
  };

  
  useEffect(() => {
    setError(null);
  }, [isLoginMode, email, password, repeatPassword]);
*/

const handleAuth = (event) => {
  event.preventDefault()
  setIsLoading(true)
  const validForm = validateForm()
  if (validForm) {
    setTextError(null)
    //console.log('submit')
    fetchReg(email, password)
      .then(() => {
        getToken(email, password)
          .then((res) => {
            setUser('user', res.access)
            setIsLogin(true)
            // setAuthUser({ username: email })
            isLogin(email)
          })
          .then(() => setIsLoading(false))
      })
      .catch((error) => {
        setTextError(error.message)
        setIsLoading(false)
        console.log(error.message)
      })
  } else {
    event.preventDefault()
  }
}
//const errorDiv = textError ? <div className="error">{textError}</div> : ''


  return (
    <S.PageContainer>
    <S.ModalForm>
      <Link to="/login">
        <S.ModalLogo>
          <S.ModalLogoImage src="/img/logo_modal.png" alt="logo" />
        </S.ModalLogo>
      </Link>
      {isLogin ? (
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
          {textError && <S.Error>{textError}</S.Error>}
          <S.Buttons>
            <S.PrimaryButton onClick={() => handleAuth({ email, password })}>
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
          {textError && <S.Error>{textError}</S.Error>}
          <S.Buttons>
            <S.PrimaryButton onClick={handleAuth}>
              Зарегистрироваться
            </S.PrimaryButton>
          </S.Buttons>
        </>
      )}
    </S.ModalForm>
  </S.PageContainer>
);
}