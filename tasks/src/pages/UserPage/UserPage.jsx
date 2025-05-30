import { useContext, useEffect, useRef, useState } from 'react'
import s from './UserPage.module.css'
import { useOutsideClick } from '../../hooks/useClickOutside'
import { SetContext } from '../../context/context'

export const UserPage = () => {
  const [isOpenImgInfo, setIsOpenImgInfo] = useState(false)
  const { isDarkTheme } = useContext(SetContext)
  const [img, setImg] = useState(null)
  const [inputText, setInputText] = useState(
    localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : {
          lastName: '',
          name: '',
          patronymic: '',
          dateofbirth: '',
          email: '',
          aboutme: '',
        },
  )
  const [isEdit, setIsEdit] = useState({
    lastname: false,
    name: false,
    patronymic: false,
    dateofbirth: false,
    email: false,
  })

  const modalRef = useRef()
  const lastInputRef = useRef()
  const nameInputRef = useRef()
  const patronymicInputRef = useRef()
  const dateofbirthInputRef = useRef()
  const emailInputRef = useRef()

  //редактирование Фамилии
  const saveLastNameBtn = () => {
    setIsEdit({ ...isEdit, lastname: false })
    localStorage.setItem('userInfo', JSON.stringify(inputText))
  }
  const editLastName = () => {
    setIsEdit({
      ...isEdit,
      lastname: true,
      name: false,
      patronymic: false,
      dateofbirth: false,
      email: false,
    })
    lastInputRef.current.focus()
  }
  const changeLastNameText = (e) => {
    setInputText({ ...inputText, lastName: e.target.value })
  }

  //редактирование Имени

  const saveNameBtn = () => {
    setIsEdit({ ...isEdit, name: false })
    localStorage.setItem('userInfo', JSON.stringify(inputText))
  }
  const changeNameText = (e) => {
    setInputText({ ...inputText, name: e.target.value })
  }
  const editName = () => {
    setIsEdit({
      ...isEdit,
      lastname: false,
      name: true,
      patronymic: false,
      dateofbirth: false,
      email: false,
    })
    nameInputRef.current.focus()
  }

  //редактирование Отчества
  const savePatronymicBtn = () => {
    setIsEdit({ ...isEdit, patronymic: false })
    localStorage.setItem('userInfo', JSON.stringify(inputText))
  }
  const changePatronymicText = (e) => {
    setInputText({ ...inputText, patronymic: e.target.value })
  }
  const editPatronymic = () => {
    setIsEdit({
      ...isEdit,
      lastname: false,
      name: false,
      patronymic: true,
      dateofbirth: false,
      email: false,
    })
    patronymicInputRef.current.focus()
  }

  //редактирование Даты рождения
  const saveDateofbirth = () => {
    setIsEdit({ ...isEdit, dateofbirth: false })
    localStorage.setItem('userInfo', JSON.stringify(inputText))
  }
  const editDateofbirth = () => {
    setIsEdit({
      ...isEdit,
      lastname: false,
      name: false,
      patronymic: false,
      dateofbirth: true,
      email: false,
    })
    dateofbirthInputRef.current.focus()
  }
  const changeDateofbirthText = (e) => {
    setInputText({ ...inputText, dateofbirth: e.target.value })
  }

  //редактирование почты
  const saveEmail = () => {
    setIsEdit({ ...isEdit, email: false })
    localStorage.setItem('userInfo', JSON.stringify(inputText))
  }
  const editEmail = () => {
    setIsEdit({
      ...isEdit,
      lastname: false,
      name: false,
      patronymic: false,
      dateofbirth: false,
      email: true,
    })
    emailInputRef.current.focus()
  }
  const changeEmailText = (e) => {
    setInputText({ ...inputText, email: e.target.value })
  }

  const editAboutMe = () => {
    setInputText({ ...inputText, aboutme: e.target.value })
    localStorage.setItem('userInfo', JSON.stringify(inputText))
  }

  const changeImage = (e) => {
    const selectedFile = e.target.files[0]
    if (selectedFile) {
      // Читаем файл с помощью FileReader
      const reader = new FileReader()
      reader.onloadend = () => {
        setImg(reader.result) // reader.result будет содержать данные в формате Data URL
      }
      reader.readAsDataURL(selectedFile)
    } else {
      setImg(null) // Сбрасываем превью, если файл не выбран
    }
  }

  const openImgEditor = () => {
    setIsOpenImgInfo(!isOpenImgInfo)
  }

  const labelInitiator = () => {
    setTimeout(() => {
      setIsOpenImgInfo(false)
    }, 500)
  }

  const closeImageMenu = () => {
    setIsOpenImgInfo(false)
  }

  const deleteAvatar = () => {
    setImg(null)
    setIsOpenImgInfo(false)
  }

  useOutsideClick(modalRef, closeImageMenu)

  return (
    <>
      <h1 className={isDarkTheme ? s.titleDark : s.title}>Профиль</h1>

      <div className={isDarkTheme ? s.wrapperDark : s.wrapper}>
        <div className={s.content}>
          <div className={s.leftContent}>
            <div className={s.lastName}>
              <p>Фамилия:</p>
              <span className={s.inputText}>{inputText.lastName}</span>
              {isEdit.lastname ? (
                <button onClick={saveLastNameBtn} className={s.lastNameBtn}>
                  ✔️
                </button>
              ) : (
                <button
                  onClick={editLastName}
                  className={isDarkTheme ? s.lastNameBtnDark : s.lastNameBtn}
                >
                  🖋
                </button>
              )}
              <input
                ref={lastInputRef}
                readOnly={!isEdit.lastname}
                className={s.lastNameInput}
                type="text"
                onChange={changeLastNameText}
              />
            </div>

            <div className={s.lastName}>
              <p>Имя:</p>
              <span className={s.inputText}>{inputText.name}</span>
              {isEdit.name ? (
                <button onClick={saveNameBtn} className={s.lastNameBtn}>
                  ✔️
                </button>
              ) : (
                <button
                  onClick={editName}
                  className={isDarkTheme ? s.lastNameBtnDark : s.lastNameBtn}
                >
                  🖋
                </button>
              )}
              <input
                ref={nameInputRef}
                readOnly={!isEdit.name}
                className={s.lastNameInput}
                type="text"
                onChange={changeNameText}
              />
            </div>

            <div className={s.lastName}>
              <p>Отчество:</p>
              <span className={s.inputText}>{inputText.patronymic}</span>
              {isEdit.patronymic ? (
                <button onClick={savePatronymicBtn} className={s.lastNameBtn}>
                  ✔️
                </button>
              ) : (
                <button
                  onClick={editPatronymic}
                  className={isDarkTheme ? s.lastNameBtnDark : s.lastNameBtn}
                >
                  🖋
                </button>
              )}
              <input
                ref={patronymicInputRef}
                readOnly={!isEdit.patronymic}
                className={s.lastNameInput}
                type="text"
                onChange={changePatronymicText}
              />
            </div>

            <div className={s.lastName}>
              <p>Дата рождения:</p>
              <input
                ref={dateofbirthInputRef}
                readOnly={!isEdit.dateofbirth}
                className={isDarkTheme ? s.dateInputDark : s.dateInput}
                type="date"
                onChange={changeDateofbirthText}
              />
              {isEdit.dateofbirth ? (
                <button onClick={saveDateofbirth} className={s.dateBtn}>
                  ✔️
                </button>
              ) : (
                <button
                  onClick={editDateofbirth}
                  className={isDarkTheme ? s.lastNameBtnDark : s.lastNameBtn}
                >
                  🖋
                </button>
              )}
            </div>

            <div className={s.lastName}>
              <p>Почта:</p>
              <span className={s.inputText}>{inputText.email}</span>
              {isEdit.email ? (
                <button onClick={saveEmail} className={s.lastNameBtn}>
                  ✔️
                </button>
              ) : (
                <button
                  onClick={editEmail}
                  className={isDarkTheme ? s.lastNameBtnDark : s.lastNameBtn}
                >
                  🖋
                </button>
              )}
              <input
                ref={emailInputRef}
                readOnly={!isEdit.email}
                className={s.lastNameInput}
                type="email"
                onChange={changeEmailText}
              />
            </div>
          </div>

          <div className={s.rightContent}>
            <div>
              <div onClick={openImgEditor} className={s.btnLoadImg}>
                <div className={s.btnLoadItems}></div>
                <div className={s.btnLoadItems}></div>
                <div className={s.btnLoadItems}></div>
              </div>
              {isOpenImgInfo && (
                <div
                  ref={modalRef}
                  className={isDarkTheme ? s.imgInfoDark : s.imgInfo}
                >
                  {img ? (
                    <label
                      onClick={labelInitiator}
                      for="fileUpload"
                      className={s.addImg}
                    >
                      Сменить фото
                    </label>
                  ) : (
                    <label
                      onClick={labelInitiator}
                      for="fileUpload"
                      className={s.addImg}
                    >
                      Добавить фото
                    </label>
                  )}
                  {img ? (
                    <p onClick={deleteAvatar} className={s.addImg}>
                      Удалить
                    </p>
                  ) : (
                    ''
                  )}
                </div>
              )}
            </div>

            {img ? (
              <img className={s.userImage} src={img} />
            ) : (
              <div className={isDarkTheme ? s.userImgBgDark : s.userImageBg}>
                <div className={s.headImg}></div>
                <div className={s.bodyImg}></div>
              </div>
            )}

            <input
              id="fileUpload"
              className={s.inputLoadImg}
              type="file"
              onChange={changeImage}
            />
          </div>
        </div>

        <div className={s.contentAboutMe}>
          <p>О себе:</p>
          <textarea
            className={isDarkTheme ? s.textareaDark : s.textarea}
            onChange={editAboutMe}
            name=""
            id=""
          ></textarea>
        </div>
      </div>
    </>
  )
}
