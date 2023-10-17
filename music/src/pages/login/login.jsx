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
  const [loading, setLoading] = useState(false)


  const { authUser, setAuthUser, isLogIn, setIsLogIn } = useAuth()
  
  console.log (authUser)
  console.log (isLogIn)
  const setUser = (user, token) => {
    localStorage.setItem(user, token)
    navigate('/', { replace: true })
  }
  console.log (setUser)
  const handleSubmit = async (event) => {
    try {
      event.preventDefault()
      setLoading(true)
      setError(null)
  
      const userRes = await loginUser(email, password)
      const tokenRes = await getToken(email, password)

      const userData = {...userRes, ...tokenRes}
      console.log (userData)

      setAuthUser(userData)
      localStorage.setItem("user", JSON.stringify(userData))

      setIsLogIn(true)
      navigate('/', { replace: true})
    } catch (error) {
        setError(error.message)
        console.log(error.message)
    } finally {
        setLoading(false)
    }
    
    
    
  }


  const errorDiv = error ? <div className="error">{error}</div> : ''
  return (

    <S.Wrapper>
      <S.ContainerEnter>
        <S.ModalBlock>
        <S.ModalFormLogin onSubmit={handleSubmit}>
          <S.ModalLogo>
              <img src="../img/logo_modal.png" alt="logo" />
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
            <S.ModalBtnEnter disabled={loading}>
              Войти
            </S.ModalBtnEnter>
            <Link to="/register">
              <S.ModalBtnSignup>Зарегистрироваться</S.ModalBtnSignup>
            </Link>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerEnter>
    </S.Wrapper>
  )
}