import { createContext, useState } from 'react'

export const SetContext = createContext(null)

export const SettingProvider = ({ children }) => {
  const [commonTasks, setCommonTasks] = useState(false)
  const [myTasks, setMyTasks] = useState(true)

  // ... логика управления пользователем

  return (
    <SetContext.Provider
      value={{ commonTasks, setCommonTasks, myTasks, setMyTasks }}
    >
      {children}
    </SetContext.Provider>
  )
}
