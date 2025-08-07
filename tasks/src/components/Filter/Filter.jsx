import { useContext, useEffect, useState } from 'react'
import s from './Filter.module.css'
import { SetContext } from '../../context/context'

export const Filter = () => {
  const {
    filterTask,
    setFilterTask,
    search,
    setSearch,
    initialTasks,
    updateTask,
    tasks,
  } = useContext(SetContext)
  const [isOpen, setIsOpen] = useState('')
  const [error, setError] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    const filteredTasks = []
    tasks.map((i) => {
      if (i.title.toLowerCase().includes(search.toLowerCase())) {
        filteredTasks.push(i)
        updateTask(filteredTasks)
      } else {
        setError('Нет совпадающих задач')
      }
    })
    if (search === '') {
      updateTask(initialTasks)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setError('')
    }, 5000)
  }, [error])

  const handleOpenFilter = () => {
    if (isOpen === 'open') {
      setIsOpen('close')
    } else {
      setIsOpen('open')
    }
  }

  const myTaskChecked = () => {
    if (filterTask.commonTasks !== false) {
      setFilterTask({ ...filterTask, myTasks: !filterTask.myTasks })
      localStorage.setItem(
        'filter',
        JSON.stringify({ ...filterTask, myTasks: filterTask.myTasks }),
      )
    }
  }

  const commonTaskChecked = () => {
    if (filterTask.myTasks !== false) {
      setFilterTask({ ...filterTask, commonTasks: !filterTask.commonTasks })
      localStorage.setItem(
        'filter',
        JSON.stringify({ ...filterTask, commonTasks: filterTask.commonTasks }),
      )
    }
  }

  return (
    <div className={s.filter}>
      <div className={s.topContent}>
        <div className={s.errorContent}>
          <form className={s.searchContent} onSubmit={handleSearch} action="">
            <input
              className={s.search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Искать..."
            />
            <button className={s.searchBtn} type="submit">
              Поиск
            </button>
          </form>
          {error && <div className={s.error}>{error}</div>}
        </div>
        <div
          onClick={handleOpenFilter}
          className={isOpen === 'open' ? s.openFilterActive : s.openFilter}
        ></div>
      </div>
      <div
        className={`${isOpen === 'open' ? s.modalOpen : isOpen === 'close' ? s.modalClose : s.filterContent}`}
      >
        {isOpen === 'open' && (
          <div className={s.itemContent}>
            <div onClick={myTaskChecked} className={s.item}>
              <input
                className={s.checkbox}
                type="checkbox"
                readOnly
                checked={filterTask.myTasks}
              />
              <p>Мои задачи</p>
            </div>
            <div className={s.item} onClick={commonTaskChecked}>
              <input
                className={s.checkbox}
                type="checkbox"
                readOnly
                checked={filterTask.commonTasks}
              />
              <p>Общие задачи</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
