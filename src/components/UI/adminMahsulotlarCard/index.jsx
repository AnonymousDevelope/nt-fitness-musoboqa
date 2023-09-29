import React from 'react'
import { ProductCard } from '../../fields'
const index = ({onClick}) => {
  return (
    <div className="admin_mahsulotlar__card">
        <ProductCard onClick={onClick} edit={true}/>
    </div>
  )
}

export default index