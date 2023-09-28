import React from 'react'
import { AdminHeader } from '../../../layouts'
import { Profile } from '../../../../assets/images/png'
import { SavolJavobContainer } from '../../../fields'
import { SavolJavobInput, UsersListItem } from '../../../UI'
const index = () => {
  return (
    <>
      <section className='admin_savol_javob'>
        <AdminHeader titlename={
          <>
            <div className="user_profile">
              <div className="profile">
                <img src={Profile} alt="" />
              </div>
              <div className="column">
                <div className="name">Aziz</div>
                <div className="phone_number">+998936083334</div>
              </div>
            </div>
          </>
        } />
        <div className="admin_savol_javob_container">
          <div className="users_list">
            <UsersListItem >
              Lorem ipsum dolor sit
            </UsersListItem>
            <UsersListItem >
              Lorem ipsum dolor sit
            </UsersListItem>
            <UsersListItem >
              Lorem ipsum dolor sit
            </UsersListItem>
          </div>
          <div className="savol_javob_container">
            <SavolJavobContainer>
              <div className="row">
                <div className="col-md-6">
                  <div className="column">
                    <div className="user_chat_block">
                      <div className="user_message">
                        salom
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="column">
                    <div className="admin_chat_block">
                      <div className="admin_message">Assalomu Aleykum</div>
                    </div>
                  </div>
                </div>
              </div>
            </SavolJavobContainer>
            <SavolJavobInput />
          </div>
        </div>
      </section>
    </>
  )
}

export default index