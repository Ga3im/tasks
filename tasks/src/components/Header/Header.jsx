import { useState } from 'react'
import s from './Header.module.css'

export const Header = () => {
  const [isOpen, setIsOpen] = useState()
  const openMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.logo}>Logo</div>
        <button className={s.addTask}>Добавить задачу</button>
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
              readOnly
              type="checkbox"
            />
          </div>
          <p>Профиль</p>
          <p> Вход</p>
        </div>
      )}
    </>
  )
}
