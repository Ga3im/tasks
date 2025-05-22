import { useContext, useEffect } from 'react'
import s from './Archive.module.css'
import { SetContext } from '../../context/context'
import { loadTaskCount, loadTime } from '../Main/Main'
import { Link, Outlet } from 'react-router-dom'
import { Card } from '../../components/Card/Card'
import { LoadCard } from '../../components/LoadCard/LoadCard'
import { Router } from '../routes'

export const Archive = () => {
  const { archiveTasks, isDarkTheme, isloading, setIsloading } =
    useContext(SetContext)

  // загрузка задач
  useEffect(() => {
    setIsloading(true)
    setTimeout(() => {
      setIsloading(false)
    }, loadTime * 1000)
  }, [archiveTasks])

  return (
    <>
      <Link to={Router.cards} className={isDarkTheme ? s.backButtonDark : s.backButton}> Назад</Link>
      <h1 className={isDarkTheme ? s.titleDark : s.title}>Архив</h1>
      <div className={s.content}>
        {isloading
          ? loadTaskCount.map((i) => {
              return <LoadCard key={i} />
            })
          : archiveTasks.map((task) => {
              return (
                <Card
                  id={task.id}
                  key={task.id}
                  title={task.title}
                  description={task.description}
                  common={task.common}
                  date={task.date}
                />
              )
            })}
      </div>
      <Outlet />
    </>
  )
}
