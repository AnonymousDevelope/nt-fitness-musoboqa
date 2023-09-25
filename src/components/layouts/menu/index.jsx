import React, { useState } from 'react';
// import {Logo} from '../../../assets/images/png';
// import { Link } from 'react-router-dom';
// import { MenuItem } from '../../../assets/images/svg';

function Index() {
<<<<<<< HEAD
  // const [currentIndex, setCurrentIndex] = useState(-1);
  // const Active = (idx) =>{
  //   setCurrentIndex(idx);
  // }
  return (
    <>
    <h1>salom</h1>
      {/* <div className="sidebar-menu">
=======
  const [currentIndex, setCurrentIndex] = useState(0);
  const Active = (idx) =>{
    setCurrentIndex(idx);
  }
  return (
    <>
      <div className="sidebar-menu col-xl-3">
>>>>>>> ea9f5fe9f44f29e589faf11e38b407bd0106c87b
        <div className="logo-menu brand">
          <img src={Logo} alt="" />
        </div>
        <div className="menu-item w-100">
          <ul className="nav-menu ps-0 w-100">
            {MenuItem.map((item, index) => (
              <li key={index} className={`nav-item ${currentIndex === index ? 'active' : ''}`}
              onClick={() => Active(index)}>
                {item.icon}
                <Link
                  to="#"
                  className={`nav-link`}
                  onClick={() => Active(index)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div> */}
    </>
  );
}

export default Index;
