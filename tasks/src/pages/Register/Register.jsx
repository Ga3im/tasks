import { Link, useNavigate } from 'react-router-dom'
import s from './Register.module.css'
import { Router } from '../routes'
import { useEffect, useState } from 'react'

export const Register = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  })

  const [error, setError] = useState('')

  const register = (e) => {
    e.preventDefault()

    if (user.name === '') {
      setError('Введите имя')
    } else if (user.email === '') {
      setError('Введите почту')
    } else if (user.password === '') {
      setError('Введите пароль')
    } else {
      navigate(Router.cards)
    }
    setTimeout(() => {
      setError('')
    }, 7000)
  }
  return (
    <>
      <div className={s.wrapper}>
        <form onSubmit={register} className={s.form} action="#">
          <h1>Регистрация</h1>
          <div>
            <p className={s.inputText}>Имя</p>
            <input
              className={s.input}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              type="text"
            />
          </div>
          <div>
            <p className={s.inputText}>Почта</p>
            <input
              className={s.input}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              type="email"
            />
          </div>
          <div>
            <p className={s.inputText}>Пароль</p>
            <input
              className={s.input}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              type="password"
            />
          </div>
          {error && <p className={s.errorMessage}>{error}</p>}
          <button className={s.loginbutton} type="submit">
            Войти
          </button>

          <p className={s.gotologin}>
            Есть аккаунт? <Link to={Router.login}>Авторизуйтесь</Link>
          </p>
        </form>
      </div>
    </>
  )
}
