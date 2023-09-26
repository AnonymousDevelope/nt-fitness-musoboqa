import React from 'react'
import { Logo } from "../../../assets/images/png";
import { NavLink } from 'react-router-dom';
import { HomeIcon, JihozVsMaxsulotlarIcon, MijozlarIcon, SavolJavobIcon, StatistikaIcon, UstozlarIcon } from '../../../assets/react-icons';
const index = () => {
  return (
    <section className='admin__sidebar'>
      <NavLink>
        <div className='admin__logo' style={{ backgroundImage: `url(${Logo})` }} ></div>
      </NavLink>
      <ul className='admin__sidebar__container'>
        <NavLink to='asosiy'>
          <HomeIcon />
          <span>Asosiy</span>
        </NavLink>
        <NavLink to='ustozlar'>
          <UstozlarIcon />
          <span>Ustozlar</span>
        </NavLink>
        <NavLink to='mijozlar'>
          <MijozlarIcon />
          <span>Mijozlar</span>
        </NavLink>
        <NavLink to='jihozlar'>
        <JihozVsMaxsulotlarIcon />
        <span>Jihozlar</span>
        </NavLink>
        <NavLink to='maxsulotlar'>
          <JihozVsMaxsulotlarIcon />
          <span>Maxsulotlar</span>
        </NavLink>
        <NavLink to='savol-javob'>
          <SavolJavobIcon />
          <span>Savol javob</span>
        </NavLink>
        <NavLink to='statistika'>
          <StatistikaIcon />
          <span>Statistika</span>
        </NavLink>
      </ul>
    </section>
  )
}

export default index