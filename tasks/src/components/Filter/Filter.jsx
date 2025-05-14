import { useContext, useState } from 'react'
import s from './Filter.module.css'
import { SetContext } from '../../../context/context'

export const Filter = () => {
  const { commonTasks, setCommonTasks, myTasks, setMyTasks } =
    useContext(SetContext)

  const myTaskChecked = () => {
    if (commonTasks !== false) {
      setMyTasks(!myTasks)
    }
  }

  const commonTaskChecked = () => {
    if (myTasks !== false) {
      setCommonTasks(!commonTasks)
    }
  }
  
  return (
    <div className={s.filter}>
      <div onClick={myTaskChecked} className={s.item}>
        <input
          className={s.checkbox}
          type="checkbox"
          readOnly
          checked={myTasks}
        />
        <p>Мои задачи</p>
      </div>
      <div className={s.item} onClick={commonTaskChecked}>
        <input
          className={s.checkbox}
          type="checkbox"
          readOnly
          checked={commonTasks}
        />
        <p>Общие задачи</p>
      </div>
    </div>
  )
}
