// ** react
import React from 'react'
import {Link} from 'react-router-dom'

// ** icon
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser, faHouse, faSquarePlus} from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
  return (
    <div className="anb">
      <div className="anb__wrap">
        <ul className="anb-list">
          <li className="anb-list__item my-page">
            <Link to={'/mypage'}>
              <FontAwesomeIcon icon={faUser}/>
            </Link>
          </li>
          <li className="anb-list__item my-page">
            <Link to={'/'}>
              <FontAwesomeIcon icon={faHouse}/>
            </Link>
          </li>
          <li className="anb-list__item my-page">
            <Link to={'/'}>
              <FontAwesomeIcon icon={faSquarePlus}/>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navigation