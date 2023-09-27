import React from 'react'
import { Qungiroq, Settings } from '../../../assets/react-icons'
import { userImg } from '../../../assets/images/svg'

const index = ({title}) => {
  return (
    <div className='ustozlar__header'>
    <h1 className='header__subtitle'>{title}</h1>
   <div className='header__right'>
   <div className='qunSet'>
      <Qungiroq />
    </div>
    <div className='qunSet'>
      <Settings />
    </div>
    <div className='header__title'>
    <h5>Ochilov . M</h5>
    <span>Admin</span>
    </div>
    <img className='user__img' src={userImg} alt="" />
   </div>
  </div>
  )
}

export default index