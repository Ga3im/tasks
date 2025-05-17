import { Link, useNavigate } from 'react-router-dom'
import { Router } from '../routes'
import s from './CreateTask.module.css'
import { useContext, useState } from 'react'
import { SetContext } from '../../context/context'

export const getDate = () => {
  let day = new Date().getDate()
  let month = new Date().getMonth() + 1
  let year = new Date().getFullYear()
  return `${day}.${month < 10 ? '0' + month : month}.${year}`
}

export const CreateTask = () => {
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { isDarkTheme, tasks, updateTask } = useContext(SetContext)

  const [newTask, setNewTask] = useState({
    id: tasks.length + 1,
    title: '',
    description: '',
    common: false,
    date: getDate(),
  })

  const addNewTask = (e) => {
    e.preventDefault()
    if (newTask.title === '') {
      setError('Введите название задачи')
    } else if (newTask.description === '') {
      setError('Введите описание задачи')
    } else {
      updateTask([...tasks, newTask])
      navigate(Router.main)
    }
    setTimeout(() => {
      setError('')
    }, 7000)
  }

  return (
    <>
      <div className={s.wrapper}>
        <form
          onSubmit={addNewTask}
          className={isDarkTheme ? s.contentDark : s.content}
        >
          <div className={s.contentTop}>
            <h1>Создание задачи</h1>

            <Link
              to={Router.main}
              className={isDarkTheme ? s.closeWindowDark : s.closeWindow}
            >
              &#10006;
            </Link>
          </div>
          <p>Наименование задачи</p>
          <input
            className={isDarkTheme ? s.taskInputDark : s.taskInput}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            type="text"
          />
          <p>Описание задачи</p>
          <textarea
            onChange={(e) =>
              setNewTask({ ...newTask, description: e.target.value })
            }
            className={isDarkTheme ? s.textareaDark : s.textarea}
            name=""
            id=""
          ></textarea>
          {error && <p className={s.error}>{error}</p>}

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
