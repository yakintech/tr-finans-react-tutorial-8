import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SupplierHeader from './SupplierHeader'
import SupplierList from './SupplierList'

function SupplierPage() {

  const [suppliers, setsuppliers] = useState([]);

  useEffect(() => {

    loadSuppliers();

  }, [])

  const removeSupplier = (id: number) => {

    axios.delete('https://northwind.vercel.app/api/suppliers/' + id)
      .then(res => {
        loadSuppliers();
      })
  }

  const loadSuppliers = () => {
    axios.get('https://northwind.vercel.app/api/suppliers')
      .then(res => {
        setsuppliers(res.data)
      })
  }



  return (<>
    <SupplierHeader />
    <SupplierList suppliers={suppliers} removeSupplier={removeSupplier} />
  </>
  )
}

export default SupplierPage