import React, { useState } from 'react';
import { Logo } from '../../../assets/images/png';
import { NavLink } from 'react-router-dom';
import { UserIcon, Calendar, UstozlarIcon, JihozVsMaxsulotlarIcon, Chat, Activity } from '../../../assets/react-icons';
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
                            <NavLink className="nav-link" to="men">
                                <UserIcon />
                                <span>Men</span>
                            </NavLink>
                            <NavLink className="nav-link" to="buyurtmalarim">
                                <Calendar />
                                <span>Buyurtmalarim</span>
                            </NavLink>
                            <NavLink className="nav-link" to="ustozlar">
                                <UstozlarIcon />
                                <span>Ustozlar</span>
                            </NavLink>
                            <NavLink className="nav-link" to="jihozlar">
                                <JihozVsMaxsulotlarIcon />
                                <span>Jihozlar</span>
                            </NavLink>
                            <NavLink className="nav-link" to="maxsulotlar">
                                <Calendar />
                                <span>Mahsulotlar</span>
                            </NavLink>
                            <NavLink className="nav-link" to="savol-javob">
                                <Chat />
                                <span>Savol Javob</span>
                            </NavLink>
                            <NavLink className="nav-link" to="statistika">
                                <Activity />
                                <span>Statistika</span>
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Index;
