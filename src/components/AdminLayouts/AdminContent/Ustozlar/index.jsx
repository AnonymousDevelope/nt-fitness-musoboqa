import React from 'react'
import { Bell, Qungiroq, SearchIcon, Settings } from '../../../../assets/react-icons'
import { userImg } from '../../../../assets/images/svg'
import { AdminHeader, AdminSearchPlus, UstozCard } from '../../../UI'
import { Pagination } from '../../../fields'
import { Outlet } from 'react-router-dom'

const index = () => {
  return (
    <section className='ustozlar__card'>
      <>
        <AdminHeader title="Ustozlar" />
        <AdminSearchPlus />
        <div className='ustozlar__list'>
          <UstozCard className="ustozCard" />
          <UstozCard className="ustozCard" />
          <UstozCard className="ustozCard" />
          <UstozCard className="ustozCard" />
          <UstozCard className="ustozCard" />
          <UstozCard className="ustozCard" />
          <UstozCard className="ustozCard" />
          <UstozCard className="ustozCard" />
          <UstozCard className="ustozCard" />
        </div>
        <Pagination className="ustozlar__pagination" children=" 1-12 dan   18 ta   " item1={1} item2={2} item3={3} />
      </>
    </section >
  )
}

export default index