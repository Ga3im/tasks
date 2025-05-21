import { useNavigate } from 'react-router-dom'
import s from './Card.module.css'
import { useContext } from 'react'
import { SetContext } from '../../context/context'

export const Card = ({ id, title, description, common, date }) => {
  const navigate = useNavigate()
  const { isDarkTheme, setCurrentTask } = useContext(SetContext)
  const cardInfo = () => {
    setCurrentTask({
      id: id,
      title: title,
      description: description,
      common: common,
      date: date,
    })
    navigate(`/main/tasks/${id}`)
  }
  return (
    <>
      <div onClick={cardInfo} className={isDarkTheme ? s.wrapperDark :s.wrapper}>
        <div className={s.titleContent}>
          <p className={s.titleText}>{title}</p>{' '}
          {!common && <span className={s.commonTasks}></span>}
        </div>
        <p className={s.description}>{description}</p>
        <p className={s.createDate}>{date}</p>
      </div>
    </>
  )
}
