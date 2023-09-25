import React from 'react'
import { PaginationLeft, PaginationRight, SearchIcon, UchNuqta, UserIcon } from '../../../../assets/react-icons'
import { profilePicture, gantelIcon, jihozlarIcon, mijozlarIcon, ustozlarIcon } from '../../../../assets/images/svg'

const index = () => {
  return (
    <section className='asosiy__dashboard'>
      <div className='dashboard'>
        <div className='header'>
          <h1 className='title'>Dashboard</h1>
          <label className='search__label' htmlFor="search">
            <SearchIcon />
            <input className='search__input' type="search" id="search" placeholder='Izlash' />
          </label>
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
          <div className=''>
            <h4> 1-5 dan  18 ta</h4>
            <div>
              <PaginationLeft />
              <div></div>
              <div></div>
              <div></div>
              <PaginationRight />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default index