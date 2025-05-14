import { Link } from 'react-router-dom'
import { Router } from '../routes'
import s from './CreateTask.module.css'

export const CreateTask = () => {
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.content}>
          <div className={s.contentTop}>
            <h1>Создание задачи</h1>

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
              <input
                className={s.checkbox}
                type="checkbox"
                readOnly
              />
              <p>Общая задача</p>
            </div>
            <button className={s.addButton}>Добавить задачу</button>
          </div>
        </div>
      </div>
    </>
  )
}
