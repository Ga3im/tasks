import s from './Card.module.css'

export const Card = ({ title, description, common, date }) => {
  return (
    <>
      <div className={s.wrapper}>
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
