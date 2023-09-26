import React, { useEffect } from 'react'
import { setTitle } from "../../../../store/actions"
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { UserHeader } from '../../../layouts';
import { ProductCard } from '../../../fields';
function index() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTitle("Buyurtmalarim"))
  }, [useParams])
  return (
    <>
      <UserHeader titlename='Buyurtmalar' />
      <main className='buyumlar'>
        <div className="card">
          <div className="row">
            <ProductCard />
            <ProductCard 
              product_name={"Stol Tennis"}
              product_company={"Duos Latio"}
              product_price={"120$"}
              product_purpose={"O'ynash uchun"}
            />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </main>
    </>
  )
}

export default index