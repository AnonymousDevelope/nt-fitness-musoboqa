import React from 'react'
import { SearchIcon } from '../../../../assets/react-icons'
import { gantelIcon, jihozlarIcon, mijozlarIcon, ustozlarIcon } from '../../../../assets/images/svg'

const index = () => {
  return (
    <section className='asosiy__dashboard'>
      <div className='dashboard'>
        <div className='header'>
          <h1 className='title'>Dashboard</h1>
          <label className='search__label' htmlFor="search">
            <SearchIcon />
            <input className='search__input' type="search" id="search" placeholder='Izlash' />
          </label>
        </div>
        <ul className='dashboard__info'>
          <li>
            <img src={gantelIcon} alt="" />
            <div className=''>
              <h3>Maxsulotlar</h3>
              <h1>341</h1>
            </div>
          </li>
          <li>
            <img src={mijozlarIcon} alt="" />
            <div className=''>
              <h3>Maxsulotlar</h3>
              <h1>341</h1>
            </div>
          </li>
          <li>
            <img src={ustozlarIcon} alt="" />
            <div className=''>
              <h3>Maxsulotlar</h3>
              <h1>341</h1>
            </div>
          </li>
          <li>
            <img src={jihozlarIcon} alt="" />
            <div className=''>
              <h3>Maxsulotlar</h3>
              <h1>341</h1>
            </div>
          </li>
        </ul>
      </div>
      <div className='admin__info'>

      </div>
    </section>
  )
}

export default index