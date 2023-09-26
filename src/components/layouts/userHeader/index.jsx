import React from 'react'
import { Checkout,Bell,Settings } from '../../../assets/react-icons'
import { Profile } from '../../../assets/images/png'
import { useSelector } from 'react-redux'
function index({titlename="Mijozlar"}) {
    const title = useSelector(state => state.title); 
    return (
        <header>
            <div className='user-nick'>{titlename}</div>
            <div className="user-instruction">
                <div className="checkout">
                    <Checkout />
                </div>
                <div className="bell">
                    <Bell />
                </div>
                <div className="settings">
                    <Settings />
                </div>
                <div className="my_account">
                    <div className="row align-items-end">
                        <div className="col-7 row">
                            <div className="col-12 name">
                                John Doe
                            </div>
                            <div className="col-12 another">
                                +9989360833334
                            </div>
                        </div>
                        <div className="col-4 profile">
                            <img src={Profile} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default index