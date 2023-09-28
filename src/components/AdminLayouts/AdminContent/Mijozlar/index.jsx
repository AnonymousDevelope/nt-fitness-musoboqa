import React from 'react'
import { MijozCard } from '../../../fields'
import { AdminHeader } from '../../../layouts'
// import 
const index = () => {
  return (
    <>
      <section className='mijozlar__card'>
        <AdminHeader />
        <MijozCard photoCard={""}>
          <div className="amallar">
            <button className="ozgartirish">
              {/* <span aria-disabled="true" className='savatga_qoshish_text'> */}
              o'zgartirish
              {/* </span> */}
            </button>
            <button className="ochirish">
              {/* <span className='sotib_olish_text'> */}
              o'chirish
              {/* </span> */}
            </button>
          </div>
        </MijozCard>
      </section>
    </>
  )
}

export default index