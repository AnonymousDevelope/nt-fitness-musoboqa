import React from 'react'
import { UserHeader } from '../../../layouts'
import { ProductCard } from '../../../fields'
import { Mahsulot } from '../../../../assets/images/png'
const index = () => {
  return (
    <>
    <UserHeader titlename='Savat'/>
      <main className='savat'>
          <div className="card">
            <ProductCard 
              product_name='Trinajor Stol'
              product_price='120$'
              product_company='Denes'
              product_purpose='Ozish uchun'              
            />
            <ProductCard 
              photoProduct={Mahsulot}
            />
          </div>
      </main>
    </>
  )
}

export default index