import React, { useState } from 'react';
import { Logo } from '../../../assets/images/png';
import { NavLink } from 'react-router-dom';
import { UserIcon, Calendar } from '../../../assets/react-icons';

function Index() {
    return (
        <>
            <section className='sidebar-left col-xl-3 '>
                <div className="sidebar-menu col-xl-3">
                    <div className="logo-menu brand">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="menu-item w-100">
                        <ul className="nav-menu ps-0 w-100">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="men">Men</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="buyurtmalarim">Buyurtmalarim</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="ustozlar">Ustozlar</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="jihozlar">Jihozlar</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="maxsulotlar">Maxsulotlar</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="savol-javob">Savol javob</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="statistika">Statistika</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Index;
