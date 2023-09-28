import React from 'react'
import { UserHeader } from '../../../layouts'
import { UserIcon } from '../../../../assets/react-icons'
import { SavolJavobContainer } from '../../../fields'
import { SavolJavobInput } from '../../../UI'

function index() {
  return (
    <>
      <UserHeader
        titlename={
          <>
            <div className="savol_javob_header_title">
              <div className="savol_javob_header_logo">
                <UserIcon className={"white-user"} />
              </div>
              <div className="savol_javob_header_title_text">Admin</div>
            </div>
          </>
        } />
      <main className='User__Savol_Javob'>
        <SavolJavobContainer>
          <div className="column">
            <span className="savol_javob__date">12.02.2023</span>
            <div className="row">
              <div className="col-md-6">
                <div className="admin_chat__block">
                  <div className="admin_chat">Assalomu Aleykum</div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="user_chat__block">
                  <div className="user_chat">Salom</div>
                </div>
              </div>
            </div>
          </div>
        </SavolJavobContainer>
        <div className="user_send_message">
          <SavolJavobInput />
        </div>
      </main>
    </>
  )
}

export default index