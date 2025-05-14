import { Link, Outlet } from 'react-router-dom'
import { Router } from '../../pages/routes'
import { Header } from '../Header/Header'
import s from './Main.module.css'
import { Card } from '../Card/Card'
import { Filter } from '../Filter/Filter'
import { tasks } from '../../tasks'
import { useContext, useEffect } from 'react'
import { SetContext } from '../../../context/context'
import { getTasks } from '../../services/api'

export const Main = () => {
  const { commonTasks, myTasks } = useContext(SetContext)

  // useEffect(() => {
  //   getTasks().then((res) => {
  //     return console.log(res)
  //   })
  // }, [])

  return (
    <>
      <Outlet />

      <Header />
      <Filter />
      <div className={s.content}>
        {localStorage.getItem('tasks') !== null
          ? JSON.parse(localStorage.getItem('tasks')).map((task) => {
              return commonTasks === myTasks || commonTasks === task.common ? (
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
              return commonTasks === myTasks || commonTasks === task.common ? (
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
      <Link to={Router.login}>Логин</Link>
      <Link to={Router.register}>Региcтрация</Link>
    </>
  )
}
