// ** react hook
import React, {useEffect} from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
// ** icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
// ** store
import { useUser } from '../../pages/auth/store/useUser'

const Header = () => {
  // ** react
  const navigate = useNavigate()
  const location = useLocation()

  // ** recoil
  const {users,setUsers,loginUser} = useUser()

  useEffect(() => {
    if(loginUser){
      const filter = users.filter((item) => item.id !== loginUser.id)
      filter.push(loginUser)
      setUsers([...filter])
    }
  }, [loginUser])

  return (
    <div className="header">
      <div className="back-arrow">
        {
          ((location.pathname === '/login') || (location.pathname === '/wordCategory')) ? <></> 
          : <button className="btn" onClick={() => navigate(-1)}>
              <FontAwesomeIcon icon={faAngleLeft} />
            </button>
        }
      </div>
      <h1 className="header__title">Memorize Words</h1>
    </div>
  )
}

export default Header