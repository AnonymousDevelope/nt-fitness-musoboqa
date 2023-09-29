import React from 'react'
<<<<<<< HEAD
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
=======
import { AdminHeader, AdminSearchPlus } from '../../../UI'
import { ButtonIcon, Deleti, Edit } from '../../../../assets/react-icons'
import { userImg } from '../../../../assets/images/svg'

const index = () => {
  return (
    <section className='mijozlar__card'>
      <AdminHeader title="Mijozlar" />
      <AdminSearchPlus />
      <table className='mijozlar__table'>
        <tr> 
          <td><input type="checkbox" id="" /></td>
          <td><span>I . O . F </span><ButtonIcon /></td>
          <td><span>ID</span> <ButtonIcon /></td>
          <td><span>Ustoz</span> <ButtonIcon /></td>
          <td><span>Boshladi</span> <ButtonIcon /></td>
          <td><span> Muddati</span> <ButtonIcon /></td>
        </tr> 
        <tr>
          <td><input type="checkbox" id="" /></td>
          <td><img className='mijoz__img' src={userImg} alt="" /></td>
          <td>
            <h4>John Doe</h4>
            <span>+998941234567</span>
          </td>
          <td>123456789 </td>
          <td>Mirzaev Mirkomil</td>
          <td>2023.04.01</td>
          <td>3</td>
          <td><Deleti /></td>
          <td><Edit /></td>
        </tr>        <tr>
          <td><input type="checkbox" id="" /></td>
          <td><img className='mijoz__img' src={userImg} alt="" /></td>
          <td>
            <h4>John Doe</h4> 
            <span>+998941234567</span>
          </td>
          <td>123456789 </td>
          <td>Mirzaev Mirkomil</td>
          <td>2023.04.01</td>
          <td>3</td>
          <td><Deleti /></td>
          <td><Edit /></td>
        </tr>        <tr>
          <td><input type="checkbox" id="" /></td>
          <td><img className='mijoz__img' src={userImg} alt="" /></td>
          <td>
            <h4>John Doe</h4>
            <span>+998941234567</span>
          </td>
          <td>123456789 </td>
          <td>Mirzaev Mirkomil</td>
          <td>2023.04.01</td>
          <td>3</td>
          <td><Deleti /></td>
          <td><Edit /></td>
        </tr>        <tr>
          <td><input type="checkbox" id="" /></td>
          <td><img className='mijoz__img' src={userImg} alt="" /></td>
          <td>
            <h4>John Doe</h4>
            <span>+998941234567</span>
          </td>
          <td>123456789 </td>
          <td>Mirzaev Mirkomil</td>
          <td>2023.04.01</td>
          <td>3</td>
          <td><Deleti /></td>
          <td><Edit /></td>
        </tr>        <tr>
          <td><input type="checkbox" id="" /></td>
          <td><img className='mijoz__img' src={userImg} alt="" /></td>
          <td>
            <h4>John Doe</h4>
            <span>+998941234567</span>
          </td>
          <td>123456789 </td>
          <td>Mirzaev Mirkomil</td>
          <td>2023.04.01</td>
          <td>3</td>
          <td><Deleti /></td>
          <td><Edit /></td>
        </tr>        <tr>
          <td><input type="checkbox" id="" /></td>
          <td><img className='mijoz__img' src={userImg} alt="" /></td>
          <td>
            <h4>John Doe</h4>
            <span>+998941234567</span>
          </td>
          <td>123456789 </td>
          <td>Mirzaev Mirkomil</td>
          <td>2023.04.01</td>
          <td>3</td>
          <td><Deleti /></td>
          <td><Edit /></td>
        </tr>
        <tr className='mijozlar__footer'>
          <td className='avvalgisi'>avvalgisi</td>
          <td className='sahifa'>sahifa 1 dan 10</td>
          <td className='keyingisi'>keyingisi</td>
        </tr>
      </table>
    </section>
>>>>>>> master
  )
}

export default index