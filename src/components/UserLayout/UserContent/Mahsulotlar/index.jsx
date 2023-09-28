import React from 'react'
import { UserHeader } from '../../../layouts'
import { Mahsulot } from '../../../../assets/images/png'
import { Calendar, Finance } from '../../../../assets/react-icons'
import { MijozCard } from '../../../fields'
function index() {
  return (
    <>
      <UserHeader titlename='Mahsulotlar' />
      {/* <main className='mahsulotlar'>
        <div className="main-title">
          <h3>
            Mahsulot ma'lumotlari
          </h3>
        </div>
        <div className="card">
          <div className="column">
            <div className="row align-items-center">
              <div className="col-xl-5">
                <div className="mahsulotlar-image">
                  <img src={Mahsulot} alt="" />
                </div>
              </div>
              <div className="col-xl-7">
                <div className="mahsulotlar-info">
                  <div className="mahsulotlar__info_text">
                    <h3 className='mahsulot_name'>Trinajor Runner</h3>
                    <h3 className='mahsulot_purpose'>Yugurish uchun</h3>
                    <h3 className='mahsulot_company'>Doys Rong</h3>
                  </div>
                  <div className="mahsulotlar__info_instruction">
                    <div className="mahsulot_instruct">
                      <div className="icon">S</div>
                      <div className="column">
                        <div className="mahsulot__instruct_title">Soni</div>
                        <div className="mahsulot__instruct_soni">18</div>
                      </div>
                    </div>
                    <div className="mahsulot_instruct">
                      <div className="icon"><Calendar /></div>
                      <div className="column">
                        <div className="mahsulot__instruct_title">Kuni</div>
                        <div className="mahsulot__instruct_kuni">...</div>
                      </div>
                    </div>
                    <div className="mahsulot_instruct">
                      <div className="icon"><Finance /></div>
                      <div className="column">
                        <div className="mahsulot__instruct_title">Narxi</div>
                        <div className="mahsulot__instruct_narx">130$</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="empty_rect">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum similique eveniet quam totam, quibusdam excepturi dolore quia, illo tenetur eaque voluptatem distinctio tempora commodi aliquid? Dicta eos id perspiciatis earum.
              </div>
            </div>
            <div className="amallar">
              <button className="savatga_qoshish">
                savatga qo'shish
              </button>
              <button className="sotib_olish">
                sotib olish
              </button>
            </div>
          </div>
        </div>
      </main> */}
      <MijozCard photoCard={Mahsulot}>
        <div className="amallar">
          <button className="savatga_qoshish">
            savatga qo'shish
          </button>
          <button className="sotib_olish">
            sotib olish
          </button>
        </div>
      </MijozCard>
    </>
  )
}

export default index