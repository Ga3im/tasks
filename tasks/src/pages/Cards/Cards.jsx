import { useContext, useEffect } from 'react'
import { Card } from '../../components/Card/Card'
import { SetContext } from '../../context/context'
import { loadTaskCount, loadTime } from '../Main/Main'
import s from './Cards.module.css'
import { LoadCard } from '../../components/LoadCard/LoadCard'
import { Outlet } from 'react-router-dom'
import { Filter } from '../../components/Filter/Filter'

export const Cards = () => {
  const { filterTask, isloading, setIsloading, isDarkTheme, tasks } =
    useContext(SetContext)

  // загрузка задач
  useEffect(() => {
    setIsloading(true)
    setTimeout(() => {
      setIsloading(false)
    }, loadTime * 1000)
  }, [tasks])

  return (
    <>
      <Filter />

      <Outlet />
      <h1 className={isDarkTheme ? s.titleDark : s.title}>Задачи</h1>

      <div className={s.content}>
        {isloading
          ? loadTaskCount.map((i) => {
              return <LoadCard key={i} />
            })
          : tasks.map((task) => {
              return filterTask.commonTasks === filterTask.myTasks ||
                filterTask.commonTasks === task.common ? (
                <Card
                  id={task.id}
                  key={task.id}
                  title={task.title}
                  description={task.description}
                  common={task.common}
                  date={task.date}
                />
              ) : (
                ''
              )
            })}
      </div>
    </>
  )
}
