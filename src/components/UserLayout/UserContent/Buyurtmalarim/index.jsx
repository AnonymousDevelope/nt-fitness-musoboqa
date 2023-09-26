import React, { useEffect } from 'react'
import { setTitle } from "../../../../store/actions"
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
function index() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTitle("Buyurtmalarim"))
  }, [useParams])
  return (
    <div>index</div>
  )
}

export default index