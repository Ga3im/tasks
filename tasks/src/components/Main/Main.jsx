import { Link, Outlet, useNavigate } from 'react-router-dom'
import { Router } from '../../pages/routes'
import { Header } from '../Header/Header'
import s from './Main.module.css'
import { Card } from '../Card/Card'
import { Filter } from '../Filter/Filter'
import { LoadCard } from '../LoadCard/LoadCard'
import { tasks } from '../../tasks'
import { useContext, useEffect, useRef, useState } from 'react'
import { SetContext } from '../../context/context'

export const Main = () => {
  const { filterTask, isDarkTheme } = useContext(SetContext)
  const [isloading, setIsloading] = useState(false)
  const loadTaskCount = [1, 2, 3, 4, 5, 6, 7]
  let loadTime = 1 // время загрузки в секундах

  useEffect(() => {
    setIsloading(true)

    setTimeout(() => {
      setIsloading(false)
    }, loadTime * 1000)
  }, [localStorage.getItem('tasks')])

  return (
    <>
      <div
        className={isDarkTheme ? s.wrapperDark : s.wrapper}
      >
        <Outlet />

        <Header />
        <Filter />
        <div className={s.content}>
          {isloading
            ? loadTaskCount.map((i) => {
                return <LoadCard key={i} />
              })
            : localStorage.getItem('tasks') !== null
              ? JSON.parse(localStorage.getItem('tasks')).map((task) => {
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
      </div>
    </>
  )
}
