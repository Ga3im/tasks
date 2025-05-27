import { Link, useNavigate } from 'react-router-dom'
import s from './Login.module.css'
import { Router } from '../routes'
import { useContext, useState } from 'react'
import { SetContext } from '../../context/context'

export const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState('')
  const { setIsAuth } = useContext(SetContext)

  const navigate = useNavigate()

  const login = (e) => {
    e.preventDefault()
    if (user.email === '') {
      setError('Введите почту')
    } else if (user.password === '') {
      setError('Введите пароль')
    } else {
      localStorage.setItem('user', JSON.stringify(user))
      setIsAuth(true)
      navigate(Router.cards)
    }
    setTimeout(() => {
      setError('')
    }, 7000)
  }
  return (
    <>
      <div className={s.wrapper}>
        <form onSubmit={login} className={s.form} action="#">
          <h1>Авторизация</h1>
          <div>
            <p className={s.inputText}>Почта</p>
            <input
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className={s.input}
              type="email"
            />
          </div>
          <div>
            <p className={s.inputText}>Пароль</p>
            <input
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className={s.input}
              type="password"
            />
          </div>
          {error && <p className={s.errorMessage}>{error}</p>}

          <button className={s.loginbutton} type="submit">
            Войти
          </button>
          <p className={s.gotoregister}>
            Нет аккаунта? <Link to={Router.register}>Зарегистрируйтесь</Link>
          </p>
        </form>
      </div>
    </>
  )
}
