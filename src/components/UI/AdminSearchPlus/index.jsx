import React from 'react'
import { SearchIcon } from '../../../assets/react-icons'
import { Link } from 'react-router-dom'

const index = () => {
  return (
    <div className='search__plus'>
    <label className='search__label' htmlFor="search">
          <SearchIcon />
          <input className='search__input' type="search" id="search" placeholder='Izlash' />
        </label>
        <Link className='ustoz__qushish' to={"/admin/yangi_ustoz_qoshish"}>+</Link>
    </div>
  )
}

export default index;