import { useContext, useEffect, useState } from 'react'
import s from './Filter.module.css'
import { SetContext } from '../../context/context'

export const Filter = () => {
  const { filterTask, setFilterTask, setSearch, initialTasks, setTasks } =
    useContext(SetContext)
  const [isOpen, setIsOpen] = useState('')

  const handleSearch = () => {
    const filteredTasks = []
    tasks.map((i) => {
      if (i.title.toLowerCase().includes(search.toLowerCase())) {
        filteredTasks.push(i)
        setTasks(filteredTasks)
      }
      if (search === '') {
        setTasks(initialTasks)
      }
    })
  }

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
        <form className={s.searchContent} type="submit" action="">
          <input
            className={s.search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Искать..."
          />
          <button className={s.searchBtn} onSubmit={handleSearch}>
            Поиск
          </button>
        </form>
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
