import { Outlet, useNavigate } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import s from './Main.module.css'
import { Filter } from '../../components/Filter/Filter'
import { useContext, useEffect, useRef, useState } from 'react'
import { SetContext } from '../../context/context'
import { Router } from '../routes'

export const loadTaskCount = [1, 2, 3, 4, 5, 6, 7]
export let loadTime = 1 // время загрузки в секундах

export const Main = () => {
  const { filterTask, isDarkTheme, tasks, isloading, setIsloading } =
    useContext(SetContext)
  const navigate = useNavigate()

  useEffect(() => {
    navigate(Router.cards)
  },[])

  return (
    <>
      <div className={isDarkTheme ? s.wrapperDark : s.wrapper}>
        <Header />
        <Filter />
        <Outlet />
      </div>
    </>
  )
}
