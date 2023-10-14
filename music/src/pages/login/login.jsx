import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import { loginUser, getToken } from '../../api'
import './login.css'

export const LoginPage = () => {
  const navigate = useNavigate()
  const setUser = (user, token) => {
    localStorage.setItem(user, token)
    navigate('/', { replace: true })
  }
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setLoading(true)
    setError(null)
    console.log('submited form')
    loginUser(email, password).catch((error) => {
      setError(error.message)
      console.log(error.message)
    })
    getToken(email, password)
    .then((res) => {
      setUser('user', res.access)
      setLoading(false)
    })
      .catch((error) => {
        setError(error.message)
        setLoading(false)
        console.log(error.message)
      })
  }

  const errorDiv = error ? <div className="error">{error}</div> : ''
  return (

    <div className="wrapper">
      <div className="container-enter">
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
              className="modal__input password"
              type="password"
              name="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="possibleError">{errorDiv}</div>
            <button disabled={loading} className="modal__btn-enter">
              Войти
            </button>
            <Link to="/register">
              <button className="modal__btn-signup">Зарегистрироваться</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}