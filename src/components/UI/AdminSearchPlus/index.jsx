import React from 'react'
import { SearchIcon } from '../../../assets/react-icons'

const index = () => {
  return (
    <div className='search__plus'>
    <label className='search__label' htmlFor="search">
          <SearchIcon />
          <input className='search__input' type="search" id="search" placeholder='Izlash' />
        </label>
        <button className='ustoz__qushish' type="button">+</button>
    </div>
  )
}

export default index