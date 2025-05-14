import { useNavigate } from 'react-router-dom'
import s from './Card.module.css'

export const Card = ({ id, title, description, common, date }) => {
  const navigate = useNavigate()
  const cardInfo = () => {
    navigate(`/card/${id}`)
  }
  return (
    <>
      <div onClick={cardInfo} className={s.wrapper}>
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
