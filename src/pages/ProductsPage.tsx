import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ProductModel } from './ProductModel';

function ProductsPage() {
  //web servisten ürünleri alıp table da listeleyeceğim.

  const [products, setProducts] = useState<ProductModel[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    loadProducts();
  }, [])

  const loadProducts = () => {
    axios.get('https://northwind.vercel.app/api/products')
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => {
        console.log('Error', err);
      })
  }

  const deleteProduct = (id?: number) => {


    var result = window.confirm("Want to delete?");
    if (result) {
      // axios.delete('https://northwind.vercel.app/api/products/' + id)
      axios.delete(`https://northwind.vercel.app/api/products/${id}`)
        .then(res => {
          loadProducts();
        })
    }


  }

  return (<>
    <h1>Length: {products.length}</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Unit Price</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {
          products && products.map((item, key) => {
            return <tr key={key}>
              <td><Link to={'/products/' + item.id}>{item.id}</Link></td>
              <td>{item.name}</td>
              <td>{item.unitPrice}</td>
              <td><button onClick={() => deleteProduct(item.id)}>Delete</button></td>
              <td><button onClick={() => navigate(`/Products/${item.id}`)}>Go to detail</button></td>

            </tr>
          })
        }
      </tbody>
    </table>
  </>)
}

export default ProductsPage