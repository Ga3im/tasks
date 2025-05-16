import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Router } from '../pages/routes'
import { tasks } from '../tasks'

export const SetContext = createContext(null)
export const SettingProvider = ({ children }) => {
  const [filterTask, setFilterTask] = useState({
    myTasks: true,
    commonTasks: false,
  })
  const [isAuth, setIsAuth] = useState(false)
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [currentTask, setCurrentTask] = useState({
    id: '',
    title: '',
    description: '',
    common: false,
    date: '',
  })
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setIsAuth(true)
    } else {
      setIsAuth(false)
      navigate(Router.login)
    }
    if (localStorage.getItem('tasks') === null) {
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }
  }, [isAuth, tasks])

  useEffect(() => {
    if (localStorage.getItem('theme')) {
      setIsDarkTheme(localStorage.getItem('theme'))
    }
  }, [])

  return (
    <SetContext.Provider
      value={{
        isDarkTheme,
        setIsDarkTheme,
        filterTask,
        setFilterTask,
        isAuth,
        setIsAuth,
        currentTask,
        setCurrentTask,
      }}
    >
      {children}
    </SetContext.Provider>
  )
}
