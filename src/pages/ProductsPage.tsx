import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ProductModel } from './ProductModel';
import { FavoritesContext, FavoritesContextType } from '../contextSample/FavoritesContext';
import { Cart, CartContext, CartContextType } from '../contextSample/CartContext';

function ProductsPage() {
  //web servisten ürünleri alıp table da listeleyeceğim.

  const [products, setProducts] = useState<ProductModel[]>([]);

  const { favorites, setFavorites } = useContext(FavoritesContext) as FavoritesContextType;
  const { cart, setCart } = useContext(CartContext) as CartContextType;

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


  const addtofav = (item: any) => {

    var favControl = favorites.find(q => q.id == item.id)

    if (!favControl)
      setFavorites([...favorites, item])
    else
      alert('Bu ürün zaten favorilerde mevcut!')


  }


  const addtocart = (item: any) => {

    //eğer ürün daha önce sepete eklenmişse QUANTITY bir artsın. eklenmemişse QUANTITY 1 olarak sepete eklensin

    var cartControl = cart.find(q => q.id == item.id);

    if (cartControl) {
      cartControl.quantity = cartControl.quantity + 1;
      setCart([...cart])
    }
    else {
      var newCartItem: Cart = {
        id: item.id,
        name: item.name,
        quantity : 1,
        unitPrice : item.unitPrice
      }

      setCart([...cart, newCartItem]);

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
              <td><button onClick={() => addtofav(item)}>Add to fav</button></td>
              <td><button onClick={() => addtocart(item)}>Add to cart</button></td>

            </tr>
          })
        }
      </tbody>
    </table>
  </>)
}

export default ProductsPage