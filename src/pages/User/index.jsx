import React from 'react'
import { Menu } from '../../components/layouts'
import { Checkout, Bell, Settings } from '../../assets/images/svg'
import { Profile } from '../../assets/images/png'
function index() {
  return (
    <>
      {/* Sidebar left menu */}
      <div className="row">
        <section className='sidebar-left float-start col-xl-3 '>
          <Menu />
        </section>
        <section className='saidbar-main col-xl-9  float-end'>
          <header>
            <div className='user-nick'>Mijoz</div>
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
          <main>
            <div className="main-title">
              <h3>Mijoz Ma'lumotlari</h3>
            </div>
            <div className="card">
              {/* Outlet save component new */}
            </div>
          </main>
        </section>
      </div>
    </>
  )
}

export default index