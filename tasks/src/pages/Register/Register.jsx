import { Link, useNavigate } from 'react-router-dom'
import s from './Register.module.css'
import { Router } from '../routes'

export const Register = () => {
  const navigate = useNavigate()
  const register = () => {
    navigate(Router.main)
  }
  return (
    <>
      <div className={s.wrapper}>
        <form onSubmit={register} className={s.form} action="#">
          <h1>Регистрация</h1>
          <div>
            <p className={s.inputText}>Имя</p>
            <input className={s.input} type="text" />
          </div>
          <div>
            <p className={s.inputText}>Почта</p>
            <input className={s.input} type="mail" />
          </div>
          <div>
            <p className={s.inputText}>Пароль</p>
            <input className={s.input} type="password" />
          </div>
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
