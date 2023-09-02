import { useNavigate, Link } from 'react-router-dom'

export const LoginPage = () => {
  const navigate = useNavigate()
  const setUser = () => {
    localStorage.setItem('user', 'token')
    // user = true
    navigate('/', { replace: true })
  }
  return (
    <div>
      <h1>Страница логина</h1>
      <Link to="/login">
      <button onClick={setUser}>Войти</button>
      </Link>
      
      <Link to="/register">
        <div>Перейти к регистрации</div>
      </Link>
    </div>
  )
}