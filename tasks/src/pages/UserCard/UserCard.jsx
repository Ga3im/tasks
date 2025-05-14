import { Link, useParams } from 'react-router-dom'
import s from './UserCard.module.css'
import { Router } from '../routes'
import { useState } from 'react'

export const UserCard = () => {
  const [isEdit, setIsEdit] = useState(false)
  let { cardId } = useParams()

  const editTask = () => {
    setIsEdit(true)
  }

  const saveEdittedTask = () => {
    setIsEdit(false)
  }

  const cancelEdit = () => {
    setIsEdit(false)
  }
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.content}>
          <div className={s.contentTop}>
            <h1>Информация {cardId}</h1>
            <Link to={Router.main} className={s.closeWindow}>
              &#10006;
            </Link>
          </div>
          <p>Наименование задачи</p>
          <input className={s.taskInput} type="text" />
          <p>Описание задачи</p>
          <textarea className={s.textarea} name="" id=""></textarea>
          <div className={s.contentBottom}>
            <div className={s.checkboxContent}>
              <input className={s.checkbox} type="checkbox" readOnly />
              <p>Моя задача</p>
            </div>
            <div className={s.checkboxContent}>
              <input className={s.checkbox} type="checkbox" readOnly />
              <p>Общая задача</p>
            </div>

            {isEdit ? (
              <>
                <button onClick={saveEdittedTask} className={s.addButton}>
                  Сохранить
                </button>
                <button onClick={cancelEdit} className={s.addButton}>
                  Отменить
                </button>
              </>
            ) : (
              <button onClick={editTask} className={s.addButton}>
                Редактировать
              </button>
            )}
            <button className={s.addButton}>Удалить</button>
          </div>
        </div>
      </div>
    </>
  )
}
