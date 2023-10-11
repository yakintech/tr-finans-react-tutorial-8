import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ProductModel } from './ProductModel';

function ProductDetailPage() {

  const [detail, setdetail] = useState<ProductModel>({})

  var { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {

    axios.get(`https://northwind.vercel.app/api/products/${id}`)
      .then(res => {
        setdetail(res.data)
      })


  }, [])



  return (<>
    <button onClick={() => navigate(-1)}>Go Back</button>
    <h1>Id: {detail.id}</h1>
    <h1>Name: {detail.name}</h1>
    <h1>Unit Price: {detail.unitPrice}</h1>
    <h1>Stock: {detail.unitsInStock}</h1>
    <h1>Category Id: {detail.categoryId}</h1>
    <h1>Supplier Id: {detail.supplierId }</h1>


  </>
  )
}

export default ProductDetailPage