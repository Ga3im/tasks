import s from './LoadCard.module.css'

export const LoadCard = () => {
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.titleContent}>
          <p className={s.titleText}></p>{' '}
          <span className={s.commonTasks}></span>
        </div>
        <p className={s.description}></p>
        <p className={s.createDate}></p>
      </div>
    </>
  )
}
