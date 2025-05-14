import { Link, useNavigate } from 'react-router-dom'
import s from './Login.module.css'
import { Router } from '../routes'

export const Login = () => {
  const navigate = useNavigate()
  const login = () => {
    navigate(Router.main)
  }
  return (
    <>
      <div className={s.wrapper}>
        <form onSubmit={login} className={s.form} action="#">
          <h1>Авторизация</h1>
          <div>
            <p className={s.inputText}>Почта</p>
            <input className={s.input} type="mail" />
          </div>
          <div>
            <p className={s.inputText}>Пароль</p>
            <input className={s.input} type="password" />
          </div>
          <button className={s.loginbutton} type="submit">Войти</button>
          <p className={s.gotoregister}>
            Нет аккаунта? <Link to={Router.register}>Зарегистрируйтесь</Link>
          </p>
        </form>
      </div>
    </>
  )
}
