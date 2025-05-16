import { useContext } from 'react'
import s from './LoadCard.module.css'
import { SetContext } from '../../context/context'

export const LoadCard = () => {
  const { isDarkTheme } = useContext(SetContext)
  return (
    <>
      <div className={isDarkTheme ? s.wrapperDark : s.wrapper}>
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
