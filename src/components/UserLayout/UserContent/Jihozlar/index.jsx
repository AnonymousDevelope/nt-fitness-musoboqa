import React from 'react'
import { UserHeader } from '../../../layouts'
import { Product } from '../../../../assets/images/png'
import { Calendar,Finance } from '../../../../assets/react-icons'
function index() {
  return (
    <>
      <UserHeader titlename='Jihozlar' />
      <main className='jihozlar'>
        <div className="main-title">
          <h3>
            Jihoz ma'lumotlari
          </h3>
        </div>
        <div className="card">
          <div className="column">
            <div className="row">
              <div className="col-xl-5">
                <div className="jihozlar-image">
                  <img src={Product} alt="" />
                </div>
              </div>
              <div className="col-xl-7">
                <div className="jihozlar-info">
                  <div className="jihozlar__info_text">
                    <h3 className='jihoz_name'>Trinajor Runner</h3>
                    <h3 className='jihoz_purpose'>Yugurish uchun</h3>
                    <h3 className='jihoz_company'>Doys Rong</h3>
                  </div>
                  <div className="jihozlar__info_instruction">
                    <div className="jihoz_instruct">
                      <div className="icon">S</div>
                      <div className="column">
                        <div className="jihoz__instruct_title">Soni</div>
                        <div className="jihoz__instruct_soni">18</div>
                      </div>
                    </div>
                    <div className="jihoz_instruct">
                      <div className="icon"><Calendar /></div>
                      <div className="column">
                        <div className="jihoz__instruct_title">Kuni</div>
                        <div className="jihoz__instruct_kuni">...</div>
                      </div>
                    </div>
                    <div className="jihoz_instruct">
                    <div className="icon"><Finance /></div>
                    <div className="column">
                      <div className="jihoz__instruct_title">Narxi</div>
                      <div className="jihoz__instruct_narx">130$</div>
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
                  {/* <span aria-disabled="true" className='savatga_qoshish_text'> */}
                    savatga qo'shish
                  {/* </span> */}
                </button>  
                <button className="sotib_olish">
                  {/* <span className='sotib_olish_text'> */}
                    sotib olish
                  {/* </span> */}
                </button>  
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default index