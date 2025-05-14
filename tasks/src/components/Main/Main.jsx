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

  useEffect(() => {
    getTasks().then((res) => {
      console.log(res)
    })
  }, [])

  return (
    <>
      <Outlet />

      <Header />
      <Filter />
      <div className={s.content}>
        {tasks.map((task) => {
          return commonTasks === myTasks || commonTasks === task.common ? (
            <Card
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
