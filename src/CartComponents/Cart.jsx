import React from 'react'
import "./Cart.css"
import { useContext } from 'react'
import { Context } from '../ContextComponents/Context'

const Cart = () => {

  const { dispatch } = useContext(Context)
  const { cart } = useContext(Context)
  console.log(cart)

  return (
    <div className='main-cart'>
      <section className='cart-main-div'>
        <ul>
          <p>Products</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total Price</p>
        </ul>
        {
          cart?.map((c) => (
            <article className='cart-card' key={c.id}>

              <div className='image-and-content'>
                <aside className='IMG-Pic'>
                  <img src={c.image} alt="" />
                </aside>

                <aside className='text-wrapp'>
                  <p style={{ color: "#053d5c" }}>{c.title}</p>
                  <p style={{ fontWeight: "500" }}>Rate: {c.rating.rate}%</p>
                  <p style={{ fontWeight: "500" }}>Count: {c.rating.count}</p>
                </aside>

              </div>

              <div className='PQT-main-div'>
                <p>${c.price}</p>
                <aside className='BTN-qty-inc'>
                  <button onClick={() => dispatch({ type: "IncreaseQTY", payload: c })}>+</button>
                  <p>{c.QTY}</p>
                  <button onClick={() => dispatch({ type: "DecreaseQTY", payload: c })}>-</button>
                </aside>
                <p className='bold-only'>${c.price * c.QTY}</p>

                <button className='removeBTN' onClick={() => dispatch({ type: "removeItem", payload: c })}>Remove from cart</button>
              </div>

            </article>
          ))
        }


      </section>
    </div>
  )
}

export default Cart