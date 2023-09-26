import React from 'react'
import { SavolJavobIcon, SearchIcon, UchNuqta, UserIcon } from '../../../../assets/react-icons'
import { profilePicture, gantelIcon, jihozlarIcon, mijozlarIcon, ustozlarIcon } from '../../../../assets/images/svg'
import { Pagination } from '../../../fields'
import UserInfo from './UserInfo'
import { useState } from 'react'

const index = () => {
  const [smsDisplay, setSmsDisplay] = useState(false);
  return (
    <section className='asosiy__dashboard'>
      <div className='dashboard'>
        <div className='header'>
          <h1 className='title'>Dashboard</h1>
          <label className='search__label' htmlFor="search">
            <SearchIcon />
            <input className='search__input' type="search" id="search" placeholder='Izlash' />
          </label>
          <SavolJavobIcon onClick={() => setSmsDisplay(true)} className="sms__pege" />
        </div>
        <ul className='dashboard__info'>
          <li>
            <img src={gantelIcon} alt="" />
            <div className=''>
              <h3>Maxsulotlar</h3>
              <h1>341</h1>
            </div>
          </li>
          <li>
            <img src={mijozlarIcon} alt="" />
            <div className=''>
              <h3>Maxsulotlar</h3>
              <h1>341</h1>
            </div>
          </li>
          <li>
            <img src={ustozlarIcon} alt="" />
            <div className=''>
              <h3>Maxsulotlar</h3>
              <h1>341</h1>
            </div>
          </li>
          <li>
            <img src={jihozlarIcon} alt="" />
            <div className=''>
              <h3>Maxsulotlar</h3>
              <h1>341</h1>
            </div>
          </li>
        </ul>


        <div className='admin__info'>
          <h1 className='info__title'>Ustozlar</h1>
          <table className='ustozlar__table'>
            <tr>
              <td style={{ backgroundImage: `url(${profilePicture})` }}></td>
              <td>Asilbek Abudullayev</td>
              <td>ID 123456789</td>
              <td className='user__iconcha'>
                <UserIcon />
              </td>
              <td>
                <p>Toifa</p>
                <span>||</span>
              </td>
              <td>
                Juft
              </td>
              <td>
                <UchNuqta />
              </td>
            </tr>     <tr>
              <td style={{ backgroundImage: `url(${profilePicture})` }}></td>
              <td>Asilbek Abudullayev</td>
              <td>ID 123456789</td>
              <td className='user__iconcha'>
                <UserIcon />
              </td>
              <td>
                <p>Toifa</p>
                <span>||</span>
              </td>
              <td>
                Juft
              </td>
              <td>
                <UchNuqta />
              </td>
            </tr>     <tr>
              <td style={{ backgroundImage: `url(${profilePicture})` }}></td>
              <td>Asilbek Abudullayev</td>
              <td>ID 123456789</td>
              <td className='user__iconcha'>
                <UserIcon />
              </td>
              <td>
                <p>Toifa</p>
                <span>||</span>
              </td>
              <td>
                Juft
              </td>
              <td>
                <UchNuqta />
              </td>
            </tr>     <tr>
              <td style={{ backgroundImage: `url(${profilePicture})` }}></td>
              <td>Asilbek Abudullayev</td>
              <td>ID 123456789</td>
              <td className='user__iconcha'>
                <UserIcon />
              </td>
              <td>
                <p>Toifa</p>
                <span>||</span>
              </td>
              <td>
                Juft
              </td>
              <td>
                <UchNuqta />
              </td>
            </tr>     <tr>
              <td style={{ backgroundImage: `url(${profilePicture})` }}></td>
              <td>Asilbek Abudullayev</td>
              <td>ID 123456789</td>
              <td className='user__iconcha'>
                <UserIcon />
              </td>
              <td>
                <p>Toifa</p>
                <span>||</span>
              </td>
              <td>
                Juft
              </td>
              <td>
                <UchNuqta />
              </td>
            </tr>
          </table>
          <Pagination className='ustoz__pagination' children=" 1-5 dan  18 ta" item1={1} item2={2} item3={3} />
        </div>





        <div className='mijozlar__info'>
          <h1 className='info__title'>Mijozlar</h1>
          <table className='mijozlar__table'>
            <div>
              <span>Mijoz</span>
              <span>Ustoz</span>
              <span>Xizmat</span>
              <span>kuni</span>
            </div>
            <tr>
              <td style={{ backgroundImage: `url(${profilePicture})` }}></td>
              <td>Davirov  Akbar</td>
              <td>Shavkatjon Salimboyev</td>
              <td>
                300
              </td>
              <td>
                Du Cho Ju
              </td>
            </tr>     <tr>
              <td style={{ backgroundImage: `url(${profilePicture})` }}></td>
              <td>Davirov  Akbar</td>
              <td>Shavkatjon Salimboyev</td>
              <td>
                300
              </td>
              <td>
                Du Cho Ju
              </td>
            </tr>     <tr>
              <td style={{ backgroundImage: `url(${profilePicture})` }}></td>
              <td>Davirov  Akbar</td>
              <td>Shavkatjon Salimboyev</td>
              <td>
                300
              </td>
              <td>
                Du Cho Ju
              </td>
            </tr>     <tr>
              <td style={{ backgroundImage: `url(${profilePicture})` }}></td>
              <td>Davirov  Akbar</td>
              <td>Shavkatjon Salimboyev</td>
              <td>
                300
              </td>
              <td>
                Du Cho Ju
              </td>
            </tr>     <tr>
              <td style={{ backgroundImage: `url(${profilePicture})` }}></td>
              <td>Davirov  Akbar</td>
              <td>Shavkatjon Salimboyev</td>
              <td>
                300
              </td>
              <td>
                Du Cho Ju
              </td>
            </tr>     <tr>
              <td style={{ backgroundImage: `url(${profilePicture})` }}></td>
              <td>Davirov  Akbar</td>
              <td>Shavkatjon Salimboyev</td>
              <td>
                300
              </td>
              <td>
                Du Cho Ju
              </td>
            </tr>     <tr>
              <td style={{ backgroundImage: `url(${profilePicture})` }}></td>
              <td>Davirov  Akbar</td>
              <td>Shavkatjon Salimboyev</td>
              <td>
                300
              </td>
              <td>
                Du Cho Ju
              </td>
            </tr>
          </table>
          <Pagination className='ustoz__pagination' children=" 1-7 dan  232 ta" item1={1} item2={2} item3={3} />
        </div>
      </div>
      <UserInfo display={smsDisplay} setSmsDisplay={setSmsDisplay} />
    </section>
  )
}

export default index