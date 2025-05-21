import { useContext, useEffect, useState } from 'react'
import s from './Header.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { Router } from '../../pages/routes'
import { SetContext } from '../../context/context'

export const Header = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState()

  const {
    isAuth,
    setIsAuth,
    isDarkTheme,
    setIsDarkTheme,
    isArchive,
    setIsArchive,
  } = useContext(SetContext)
  
  useEffect(() => {
    localStorage.setItem('theme', isDarkTheme)
  }, [isDarkTheme])

  const logo = () => {
    navigate(Router.cards)
  }

  const addTaskButton = () => {
    navigate(Router.createTask)
  }

  const openMenu = (e) => {
    e.stopPropagation()
    setIsOpen(!isOpen)
  }

  const authButton = () => {
    if (isAuth) {
      setIsAuth(false)
      localStorage.removeItem('user')
    } else {
      setIsAuth(true)
      navigate(Router.login)
    }
  }

  const gotoArchive = () => {
    if (isArchive) {
      navigate(Router.archive)
      setIsArchive(false)
    } else {
      navigate(Router.cards)
      setIsArchive(true)
    }
  }

  return (
    <>
      <div className={isDarkTheme ? s.wrapperDark : s.wrapper}>
        <img onClick={logo} src="/kanban-logo.png" className={s.logo} />
        <button onClick={addTaskButton} className={s.addTask}>
          Добавить задачу
        </button>
        <nav className={s.navbutton} onClick={openMenu}>
          <div className={s.navitems}></div>
          <div className={s.navitems}></div>
          <div className={s.navitems}></div>
        </nav>
      </div>
      {isOpen && (
        <div className={s.menu}>
          <div className={s.darkTheme}>
            Темный режим{' '}
            <input
              className={s.checkbox}
              onChange={(e) => setIsDarkTheme(e.target.checked)}
              type="checkbox"
              checked={isDarkTheme}
            />
          </div>
          <p className={s.userInfo}>Профиль</p>
          <p className={s.archive} onClick={gotoArchive}>
            {' '}
            {isArchive ? 'На главную ' : 'Архив'}
          </p>
          <p className={s.authButton} onClick={authButton}>
            {isAuth ? 'Выйти' : 'Войти'}{' '}
          </p>
        </div>
      )}
    </>
  )
}
