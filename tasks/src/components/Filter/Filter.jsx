import { useContext } from 'react'
import s from './Filter.module.css'
import { SetContext } from '../../context/context'

export const Filter = () => {
  const { filterTask, setFilterTask } = useContext(SetContext)

  const myTaskChecked = () => {
    if (filterTask.commonTasks !== false) {
      setFilterTask({ ...filterTask, myTasks: !filterTask.myTasks })

      console.log(filterTask.myTasks)
      localStorage.setItem(
        'filter',
        JSON.stringify({ ...filterTask, myTasks: filterTask.myTasks }),
      )
    }
  }

  const commonTaskChecked = () => {
    if (filterTask.myTasks !== false) {
      setFilterTask({ ...filterTask, commonTasks: !filterTask.commonTasks })
      console.log(filterTask.commonTasks)

      localStorage.setItem(
        'filter',
        JSON.stringify({ ...filterTask, commonTasks: filterTask.commonTasks }),
      )
    }
  }

  return (
    <div className={s.filter}>
      <div onClick={myTaskChecked} className={s.item}>
        <input
          className={s.checkbox}
          type="checkbox"
          readOnly
          checked={filterTask.myTasks}
        />
        <p>Мои задачи</p>
      </div>
      <div className={s.item} onClick={commonTaskChecked}>
        <input
          className={s.checkbox}
          type="checkbox"
          readOnly
          checked={filterTask.commonTasks}
        />
        <p>Общие задачи</p>
      </div>
    </div>
  )
}
