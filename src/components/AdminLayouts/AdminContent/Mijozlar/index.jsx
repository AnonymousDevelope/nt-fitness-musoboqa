import React from 'react'
import { MijozCard } from '../../../fields'
import { UserHeader } from '../../../layouts'
const index = () => {
  return (
    <>
      <section className='mijozlar__card'>
        <UserHeader />
        <MijozCard>
          <div className="amallar">
            <button className="ozgartirish">
              {/* <span aria-disabled="true" className='savatga_qoshish_text'> */}
              savatga qo'shish
              {/* </span> */}
            </button>
            <button className="ochirish">
              {/* <span className='sotib_olish_text'> */}
              sotib olish
              {/* </span> */}
            </button>
          </div>
        </MijozCard>

      </section>
    </>
  )
}

export default index