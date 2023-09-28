import React from 'react'
import { Bell, Qungiroq, SearchIcon, Settings } from '../../../../assets/react-icons'
import { userImg } from '../../../../assets/images/svg'
import { UstozCard } from '../../../UI'
import { Pagination } from '../../../fields'

const index = () => {
  return (
    <section className='ustozlar__card'>
      <div className='ustozlar__header'>
        <h1 className='header__subtitle'>Ustozlar</h1>
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
      <div className='search__plus'>
      <label className='search__label' htmlFor="search">
            <SearchIcon />
            <input className='search__input' type="search" id="search" placeholder='Izlash' />
          </label>
          <button className='ustoz__qushish' type="button">+</button>
      </div>
      <div className='ustozlar__list'>
       <UstozCard className="ustozCard"/>
       <UstozCard className="ustozCard"/>
       <UstozCard className="ustozCard"/>
       <UstozCard className="ustozCard"/>
       <UstozCard className="ustozCard"/>
       <UstozCard className="ustozCard"/>
       <UstozCard className="ustozCard"/>
       <UstozCard className="ustozCard"/>
       <UstozCard className="ustozCard"/>
      </div>
      <Pagination className="ustozlar__pagination" children=" 1-12 dan   18 ta   " item1={1} item2={2} item3={3}/>
    </section>
  )
}

export default index