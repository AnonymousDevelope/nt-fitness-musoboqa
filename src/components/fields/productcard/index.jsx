import React from 'react'
import { Product } from "../../../assets/images/png"
import { Edit, Trash } from '../../../assets/react-icons'
import { Link } from 'react-router-dom'
function index({
  product_name = "Trinajor runner",
  product_purpose = "Yugurish uchun",
  product_company = "Doys Rong",
  product_price = "130 $",
  edit = false,
  onClick,
}) {
  return (
    <div onClick={onClick} className="product__card">
      <div className="column">
        <div className="product__image">
          <img src={Product} alt="" />
        </div>
        <div className="product_info">
          <div className="column">
            <span className="product_name">{product_name}</span>
            <span className="product_purpose">{product_purpose}</span>
          </div>
          <div className="column">
            <span className="product_company">{product_company}</span>
            <span className="product_price">{product_price}</span>
          </div>
        </div>
        <div className="product__delete_edit">
          {
            edit ? (
              <Link>
                <Edit />
              </Link>
            ):(
              ""
            )
          }
          <Link>
            <Trash />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default index