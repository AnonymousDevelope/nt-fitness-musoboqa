import React from 'react'
import { Qungiroq, Settings } from '../../../../assets/react-icons'
import { chiqish, profilePicture, userImg } from '../../../../assets/images/svg'

const UserInfo = ({ display, setSmsDisplay }) => {
    return (
        <>
            {
                display && (
                    <section className='user__info__right'>
                        <div className='user__settengs'>
                            <Qungiroq className="qungiroq" className2="kuk__uqta" />
                            <Settings className="settings" />
                            <h3>
                                <p>Ochilov . M</p>
                                <span>Admin</span>
                            </h3>
                            <img className='user__img' src={userImg} />
                            <img src={chiqish} className='chiqish' onClick={() => setSmsDisplay(false)} />

                        </div>
                        <div className='xabarlar'>
                            <h3 className='xabarlar__title'>Xabarlar</h3>
                            <div className='xabarlar__card'>
                                <img className='xabarlar__img' src={userImg} alt="" />
                                <div className='salimjon'>
                                    <h4>Salimjon Sheraliyev  <span>12:45 PM</span></h4>
                                    <p>Lorem ipsum dolor sit amet...</p>
                                </div>
                            </div>  <div className='xabarlar__card'>
                                <img className='xabarlar__img' src={userImg} alt="" />
                                <div className='salimjon'>
                                    <h4>Salimjon Sheraliyev  <span>12:45 PM</span></h4>
                                    <p>Lorem ipsum dolor sit amet...</p>
                                </div>
                            </div>  <div className='xabarlar__card'>
                                <img className='xabarlar__img' src={userImg} alt="" />
                                <div className='salimjon'>
                                    <h4>Salimjon Sheraliyev  <span>12:45 PM</span></h4>
                                    <p>Lorem ipsum dolor sit amet...</p>
                                </div>
                            </div>  <div className='xabarlar__card'>
                                <img className='xabarlar__img' src={userImg} alt="" />
                                <div className='salimjon'>
                                    <h4>Salimjon Sheraliyev  <span>12:45 PM</span></h4>
                                    <p>Lorem ipsum dolor sit amet...</p>
                                </div>
                            </div>
                            <button type="button">Barchasi</button>
                        </div>
                    </section>
                )
            }
        </>
    )
}

export default UserInfo