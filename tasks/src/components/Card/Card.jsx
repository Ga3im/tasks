import { useNavigate } from 'react-router-dom'
import s from './Card.module.css'
import { useContext } from 'react'
import { SetContext } from '../../context/context'

export const Card = ({ task, takenCard, setTakenCard }) => {
  const navigate = useNavigate()
  const { isDarkTheme, setCurrentTask, updateTask, tasks } =
    useContext(SetContext)
  const cardInfo = () => {
    setCurrentTask({
      id: task.id,
      title: task.title,
      description: task.description,
      common: task.common,
      date: task.date,
    })
    navigate(`/main/tasks/${task.id}`)
  }

  const handleDragStart = (e, task) => {
    setTakenCard(task)
    console.log(takenCard)
    console.log('drag', task)
  }

  const handleDragLeave = (e) => {
    e.target.style.background = '#000'
  }

  const handleDragEnd = (e) => {
    e.target.style.background = '#000'
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.target.style.background = '#292929'
  }

  const handleDrop = (e, task) => {
    e.preventDefault()

    const arr = tasks.map((i) => {
      if (i.id === task.id) {
        console.log({ ...i, order: takenCard.order })
        return { ...i, order: takenCard.order }
      }
      if (i.id === takenCard.id) {
        return { ...i, order: task.order }
      }
      return i
    })
    updateTask(arr)
    setTakenCard(null)
    console.log('drop', task)
  }

  return (
    <>
      <div
        draggable
        onDragStart={(e) => handleDragStart(e, task)} // срабатывает когда взяли карточку
        onDragLeave={(e) => handleDragLeave(e)} // срабатывает когда вышли за пределы другой карочки
        onDragEnd={(e) => handleDragEnd(e)} // срабатывает если мы отпустили перемещение
        onDragOver={(e) => handleDragOver(e)} // если мы находимся над другим объектом
        onDrop={(e) => handleDrop(e, task)} // отпустили карточку
        onClick={cardInfo}
        className={isDarkTheme ? s.wrapperDark : s.wrapper}
      >
        <div className={s.titleContent}>
          <p className={s.titleText}>{task.title}</p>{' '}
          {!task.common && <span className={s.commonTasks}></span>}
        </div>
        <p className={s.description}>{task.description}</p>
        <p className={s.createDate}>{task.date}</p>
      </div>
    </>
  )
}
