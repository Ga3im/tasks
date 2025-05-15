import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Router } from '../pages/routes'

export const SetContext = createContext(null)

export const SettingProvider = ({ children }) => {
  const [filterTask, setFilterTask] = useState({
    myTasks: true,
    commonTasks: false,
  })
  const [isAuth, setIsAuth] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setIsAuth(true)
    } else {
      setIsAuth(false)
      navigate(Router.login)
    }
  }, [isAuth])

  return (
    <SetContext.Provider
      value={{
        filterTask,
        setFilterTask,
        isAuth,
        setIsAuth,
      }}
    >
      {children}
    </SetContext.Provider>
  )
}
