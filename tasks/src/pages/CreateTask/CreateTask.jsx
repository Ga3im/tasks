import { Link } from 'react-router-dom'
import { Router } from '../routes'
import s from './CreateTask.module.css'
import { useState } from 'react'
import { tasks } from '../../tasks'

const getDate = () => {
  let day = new Date().getDate()
  let month = new Date().getMonth() + 1
  let year = new Date().getFullYear()
  return `${day}.${month < 10 ? '0' + month : month}.${year}`
}

export const CreateTask = () => {
  const [newTask, setNewTask] = useState({
    id: tasks.length + 1,
    title: '',
    description: '',
    common: false,
    date: getDate(),
  })

  const addNewTask = () => {
    const updatedTasks = JSON.parse(localStorage.getItem('tasks'))
      ? JSON.parse(localStorage.getItem('tasks'))
      : tasks
    localStorage.setItem('tasks', JSON.stringify([...updatedTasks, newTask]))
  }

  return (
    <>
      <div className={s.wrapper}>
        <form onSubmit={addNewTask} className={s.content}>
          <div className={s.contentTop}>
            <h1>Создание задачи</h1>

            <Link to={Router.main} className={s.closeWindow}>
              &#10006;
            </Link>
          </div>
          <p>Наименование задачи</p>
          <input
            className={s.taskInput}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            type="text"
          />
          <p>Описание задачи</p>
          <textarea
            onChange={(e) =>
              setNewTask({ ...newTask, description: e.target.value })
            }
            className={s.textarea}
            name=""
            id=""
          ></textarea>
          <div className={s.contentBottom}>
            <div className={s.checkboxContent}>
              <input
                className={s.checkbox}
                type="checkbox"
                onChange={(e) =>
                  setNewTask({ ...newTask, common: e.target.checked })
                }
              />
              <p>Общая задача</p>
            </div>
            <button type="submit" className={s.addButton}>
              Добавить задачу
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
