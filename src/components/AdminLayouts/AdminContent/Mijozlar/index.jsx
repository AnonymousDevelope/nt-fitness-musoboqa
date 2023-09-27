import React from 'react'
import { AdminHeader, AdminSearchPlus } from '../../../UI'
import { Deleti, Edit } from '../../../../assets/react-icons'

const index = () => {
  return (
    <section className='mijozlar__card'>
      <AdminHeader title="Mijozlar" />
      <AdminSearchPlus />
      <table>
        <tr>
          <td><input type="checkbox" id="" /></td>
          <td><img src="" alt="" /></td>
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
      </table>
    </section>
  )
}

export default index