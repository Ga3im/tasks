import s from './UserCard.module.css'

export const UserCard = () => {
  return (
    <>
      <div className={s.wrapper}>
        <div>
          <h1>Оглавление</h1>
          <input type="text" name="" id="" />
          <p>Описание</p>
          <textarea name="" id=""></textarea>
          <div>
            <input type="checkbox" />
            <p>Моя задача</p>
          </div>
          <div>
            <input type="checkbox" />
            <p>Общая задача</p>
          </div>
          <button>Редактировать</button>
          <button>Удалить</button>
        </div>
      </div>
    </>
  )
}
