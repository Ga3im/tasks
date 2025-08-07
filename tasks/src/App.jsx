import { Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login/Login'
import { Register } from './pages/Register/Register'
import { Router } from './pages/routes'
import { SettingProvider } from './context/context'
import { CreateTask } from './pages/CreateTask/CreateTask'
import { UserCard } from './pages/UserCard/UserCard'
import { Main } from './pages/Main/Main'
import { Cards } from './pages/Cards/Cards'

function App() {
  return (
    <>
      <SettingProvider>
        <Routes>
          <Route path={Router.main} element={<Main />}>
            <Route path={Router.cards} element={<Cards />}>
              <Route path={'/main/tasks/:cardId'} element={<UserCard />} />
              <Route path={Router.createTask} element={<CreateTask />} />
            </Route>
          </Route>
          <Route path={Router.register} element={<Register />} />
          <Route path={Router.login} element={<Login />} />
        </Routes>
      </SettingProvider>
    </>
  )
}

export default App
