import './register.css'
import { useState } from 'react'
import { registerUser, getToken } from '../../api'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../Contexts/AuthContext'
import * as S from './register.styles'

export const RegisterPage = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const checkForm = () => password === confirmPassword
  const { authUser, setAuthUser, isLogIn, setIsLogIn } = useAuth()
  console.log (authUser)
  console.log (isLogIn)
  const setUser = (user, token) => {
    localStorage.setItem(user, token)
    navigate('/', { replace: true })
  }
  console.log(setUser)
  /*const handleSubmit = (event) => {
    event.preventDefault()
    setLoading(true)
    const valForm = checkForm()
    if (valForm) {
      setError(null)
      console.log('submit')
      registerUser(email, password)
        .then(() => {
          getToken(email, password)
          .then((res) => {
            setUser('user', res.access)
            setIsLogIn(true)
           
            setAuthUser(email)
          })
            .then(() => setLoading(false))
        })
        .catch((error) => {
          setError(error.message)
          setLoading(false)
          console.log(error.message)
        })
  } else {
    event.preventDefault()
  }
  }*/
  /*console.log(setUser)
  const handleSubmit = async (event) => {
    try {
      event.preventDefault()
      setLoading(true)
      setError(null)
  
      const userRes = await registerUser(email, password)
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
    
    
    
  }*/

  const handleSubmit = async (event) => {

    event.preventDefault()
    if (!email || !password || !confirmPassword) {
      setError("Заполните все поля");
      return;
    }

    if (password !== confirmPassword) {
      setError("Пароли не совпадают");
      return;
    }

    try {
      
      setIsLoading(true)
      setError(null)
  
      const userRes = await registerUser(email, password)
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
        setIsLoading(false)
    }

    setError(""); // Сбрасываем ошибку после успешной регистрации
  };



  const errorDiv = error ? <div className="error">{error}</div> : ''
  return (
   

    <S.Wrapper>
      <S.ContainerSignup>
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
            <S.ModalInputPassword
              type="password"
              name="password"
              placeholder="Повторите пароль"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <S.PossibleError>
              {!checkForm() && (
                <S.Error>Введенные пароли не совпадают</S.Error>
              )}
              {errorDiv}
            </S.PossibleError>
            <S.ModalBtnSignupEnt disabled={isLoading}>
              Зарегистрироваться
            </S.ModalBtnSignupEnt>
            {/* </Link> */}
          </S.ModalFormLogin>
          
        </S.ModalBlock>
      </S.ContainerSignup>
    </S.Wrapper>
  )
}