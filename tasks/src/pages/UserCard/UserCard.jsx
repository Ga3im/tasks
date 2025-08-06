import { data, Link, useNavigate, useParams } from 'react-router-dom'
import s from './UserCard.module.css'
import { Router } from '../routes'
import { useContext, useState } from 'react'
import { SetContext } from '../../context/context'
import { getDate } from '../CreateTask/CreateTask'

export const UserCard = () => {
  const [isEdit, setIsEdit] = useState(false)
  const navigate = useNavigate()
  const { cardId } = useParams()
  const {
    currentTask,
    setCurrentTask,
    isDarkTheme,
    tasks,
    updateTask,
    updateArchiveTasks,
  } = useContext(SetContext)

  const editTask = () => {
    setIsEdit(true)
  }

  const saveEdittedTask = () => {
    setIsEdit(false)
    setCurrentTask({ ...currentTask, id: cardId, date: getDate() })
    const edittedArr = tasks.map((item) =>
      item.id === currentTask.id ? currentTask : item,
    )
    updateTask(edittedArr)
    navigate(Router.cards)
  }

  const cancelEdit = () => {
    setIsEdit(false)
  }

  const deleteTask = (e) => {
    e.preventDefault()
    const newArr = tasks.filter((item) => item.id !== currentTask.id)
    updateTask(newArr)
    navigate(Router.cards)
  }

  const comletedTask = () => {
    updateArchiveTasks(currentTask)
  }

  return (
    <>
      <div className={s.wrapper}>
        <div className={isDarkTheme ? s.contentDark : s.content}>
          <div className={s.contentTop}>
            <h1>Информация</h1>
            <Link
              to={Router.cards}
              className={isDarkTheme ? s.closeWindowDark : s.closeWindow}
            >
              &#10006;
            </Link>
          </div>
          <p>Наименование задачи</p>
          <input
            readOnly={isEdit ? false : true}
            defaultValue={currentTask.title}
            onChange={(e) =>
              setCurrentTask({ ...currentTask, title: e.target.value })
            }
            className={isDarkTheme ? s.taskInputDark : s.taskInput}
            type="text"
          />
          <p>Описание задачи</p>
          <textarea
            readOnly={isEdit ? false : true}
            defaultValue={currentTask.description}
            onChange={(e) =>
              setCurrentTask({ ...currentTask, description: e.target.value })
            }
            className={isDarkTheme ? s.textareaDark : s.textarea}
            name=""
            id=""
          ></textarea>
          <div className={s.contentBottom}>
            {isEdit ? (
              <>
                {' '}
                <div
                  className={s.checkboxContent}
                  onClick={() =>
                    setCurrentTask({ ...currentTask, common: false })
                  }
                >
                  <input
                    readOnly={!currentTask.common}
                    className={s.checkbox}
                    type="checkbox"
                  />
                  <p>Моя задача</p>
                </div>
                <div
                  className={s.checkboxContent}
                  onClick={() =>
                    setCurrentTask({ ...currentTask, common: true })
                  }
                >
                  <input
                    readOnly={currentTask.common}
                    className={s.checkbox}
                    type="checkbox"
                  />
                  <p>Общая задача</p>
                </div>
              </>
            ) : currentTask.common ? (
              <div className={s.checkboxContentReadOnly}>
                <input
                  className={s.checkbox}
                  checked
                  type="checkbox"
                  readOnly
                />
                <p>Общая задача</p>
              </div>
            ) : (
              <div className={s.checkboxContentReadOnly}>
                <input
                  className={s.checkbox}
                  checked
                  type="checkbox"
                  readOnly
                />
                <p>Моя задача</p>
              </div>
            )}

            {isEdit ? (
              <>
                <button onClick={saveEdittedTask} className={s.addButton}>
                  Сохранить
                </button>
                <button onClick={cancelEdit} className={s.cancelButton}>
                  Отменить
                </button>
              </>
            ) : (
              <>
                <button onClick={editTask} className={s.editButton}>
                  Редактировать
                </button>
                <button onClick={comletedTask} className={s.addButton}>
                  Выполнено
                </button>
              </>
            )}

            <button onClick={deleteTask} className={s.delButton}>
              Удалить
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
