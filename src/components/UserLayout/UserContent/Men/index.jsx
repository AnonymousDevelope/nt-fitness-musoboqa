import React from 'react'
import { Checkout, Bell, Activity, Settings, Calendar, Phone, UserIcon, JihozVsMaxsulotlarIcon } from '../../../../assets/react-icons'
import { Ustoz, Profile } from '../../../../assets/images/png'
function index() {
  return (
    <main>
      <div className="main-title">
        <h3>Mijoz Ma'lumotlari</h3>
      </div>
      <div className="card">
        <div className="row justify-content-between">
          <div className="col-md-4">
            <div className="user-profile">
              <img src={Ustoz} alt="" />
            </div>
          </div>
          <div className="col-md-8">
            <div className="user-info">
              <div className="row justify-content-between">
                <div className="col-md-7">
                  <h3 className='name'>Komilov Botir</h3>
                </div>
                <div className="col-md-4">
                  <div className="column">
                    <div className="date">2022-01-01</div>
                    <div className="personal-id">ID 123456</div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="personal-age">
                  24 yosh
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="gender">
                    Erkak
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="postal">
                    <h3>demo#@gmail.com</h3>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl">
                  <div className="row">
                    <div className="col-md-4 icon">
                      <UserIcon />
                    </div>
                    <div className="col-md-8 column">
                      <span className='specialist'>Ustoz</span>
                      <span className='name-techer text-nowrap'>Mirzayev Mirkomil</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl">
                  <div className="row">
                    <div className="col-md-4 icon">
                      <Calendar />
                    </div>
                    <div className="col-md-8 column">
                      <span className='specialist'>kuni</span>
                      <span className='name-techer text-nowrap'>Se Pa Sha</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl">
                  <div className="row">
                    <div className="col-md-4 icon">
                      <Phone />
                    </div>
                    <div className="col-md-8 column">
                      <span className='specialist'>Tel:</span>
                      <span className='name-techer text-nowrap'>+9989360833334</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="empty_rect">
          </div>
        </div>

      </div>
    </main>
  )
}

export default index