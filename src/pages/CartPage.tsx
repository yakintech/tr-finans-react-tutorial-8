import React, { useContext } from 'react'
import { Cart, CartContext, CartContextType } from '../contextSample/CartContext'

function CartPage() {

  const { cart, setCart } = useContext(CartContext) as CartContextType


  var totalPrice = 0;

  cart.forEach(element => {
    totalPrice = totalPrice + (element.unitPrice * element.quantity);
  });

  const removeItem = (id: number) => {
    var cartFiltered = cart.filter(q => q.id != id);
    setCart([...cartFiltered])
  }

  return (<>
    <h1>Total: {totalPrice}</h1>
    <button onClick={() => setCart([])}>Empty</button>
    <ul>
      {
        cart && cart.map((item: Cart) => <>
          <li>{item.name} - {item.unitPrice.toFixed(2)} * {item.quantity} = {(item.unitPrice * item.quantity).toFixed(2)}</li>
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </>)
      }
    </ul>
  </>
  )
}

export default CartPage