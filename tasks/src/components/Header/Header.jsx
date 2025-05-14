import { useState } from 'react'
import s from './Header.module.css'
import { useNavigate } from 'react-router-dom'
import { Router } from '../../pages/routes'

export const Header = () => {
  const [isOpen, setIsOpen] = useState()
  const navigate = useNavigate()
  const openMenu = () => {
    setIsOpen(!isOpen)
  }
  const addTaskButton = () => {
    navigate(Router.createTask)
  }

  const logo = () => {
    navigate(Router.main)
  }

  return (
    <>
      <div className={s.wrapper}>
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
            <input className={s.checkbox} readOnly type="checkbox" />
          </div>
          <p>Профиль</p>
          <p> Вход</p>
        </div>
      )}
    </>
  )
}
