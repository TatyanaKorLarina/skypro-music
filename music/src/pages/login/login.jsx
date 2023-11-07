import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import { loginUser, getToken } from '../../api'
import { useAuth } from '../../Contexts/AuthContext'
import './login.css'
import * as S from './login.styles'
export const LoginPage = () => {
  const navigate = useNavigate()
 
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)


  const { authUser, setAuthUser, isLogIn, setIsLogIn } = useAuth()
  
  console.log (authUser)
  console.log (isLogIn)
  const setUser = (user, token) => {
    localStorage.setItem(user, token)
    navigate('/', { replace: true })
  }
  console.log (setUser)
  const handleSubmit = (event) => {
    event.preventDefault()
    setIsLoading(true)
    setError(null)
    console.log('submited form')
    loginUser(email, password).catch((error) => {
      setError(error.message)
      console.log(error.message)
    })
    getToken(email, password)
      .then((res) => {
        setUser('user', res.access)
        localStorage.setItem('refreshed', res.refresh)
        setIsLogIn(true)
        // setAuthUser({ username: email })
        setAuthUser(email)
        setIsLoading(false)
      })
      .catch((error) => {
        setError(error.message)
        setIsLoading(false)
        console.log(error.message)
      })
  }
    
    
  


  const errorDiv = error ? <div className="error">{error}</div> : ''
  return (
    <>

    <S.Wrapper>
      <S.ContainerEnter>
        <S.ModalBlock>
        <S.ModalFormLogin onSubmit={handleSubmit}>
          <S.ModalLogo>
              <img src="/../img/logo_modal.png" alt="logo" />
            </S.ModalLogo>
            <S.ModalInputLogin
              type="text"
              name="login"
              placeholder="Почта"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <S.ModalInputPassword
              type="password"
              name="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <S.PossibleError>{errorDiv}</S.PossibleError>
            <S.ModalBtnEnter disabled={isLoading}>
              Войти
            </S.ModalBtnEnter>
            <Link to="/register">
              <S.ModalBtnSignup>Зарегистрироваться</S.ModalBtnSignup>
            </Link>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerEnter>
    </S.Wrapper>
   </> )
  } 

