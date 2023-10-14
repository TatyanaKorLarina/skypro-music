import './register.css'
import { useState } from 'react'
import { registerUser, getToken } from '../../api'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../Contexts/AuthContext'


export const RegisterPage = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const checkForm = () => password === confirmPassword
  const { authUser, setAuthUser, isLogIn, setIsLogIn } = useAuth()
  console.log (authUser)
  console.log (isLogIn)
  const setUser = (user, token) => {
    localStorage.setItem(user, token)
    navigate('/', { replace: true })
  }
  const handleSubmit = (event) => {
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
  }
  const errorDiv = error ? <div className="error">{error}</div> : ''
  return (
   

    <div className="wrapper">
      <div className="container-signup">
        <div className="modal__block">
          
          <form className="modal__form-login" onSubmit={handleSubmit}>
            <div className="modal__logo">
              <img src="../img/logo_modal.png" alt="logo" />
            </div>
            <input
              className="modal__input login"
              type="text"
              name="login"
              placeholder="Почта"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="modal__input password-first"
              type="password"
              name="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className="modal__input password-double"
              type="password"
              name="password"
              placeholder="Повторите пароль"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className="possibleError">
              {!checkForm() && (
                <p className="error">Введенные пароли не совпадают</p>
              )}
              {errorDiv}
            </div>
            <button disabled={loading} className="modal__btn-signup-ent">
              Зарегистрироваться
            </button>
            {/* </Link> */}
          </form>
          {errorDiv}
        </div>
      </div>
    </div>
  )
}