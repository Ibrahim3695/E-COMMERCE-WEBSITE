import React from 'react'
import "./Cart.css"
import { useContext } from 'react'
import { Context } from '../ContextComponents/Context'

const Cart = () => {

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
                  <p style={{color: "#053d5c"}}>{c.title}</p>
                  <p style={{fontWeight: "500"}}>Rate: {c.rating.rate}%</p>
                  <p style={{fontWeight: "500"}}>Count: {c.rating.count}</p>
                </aside>

              </div>

              <div className='PQT-main-div'>
                <p>${c.price}</p>
                <aside className='BTN-qty-inc'>
                  <button>+</button>
                  <p>1</p>
                  <button>-</button>
                </aside>
                <p className='bold-only'>$4000</p>
              </div>
            </article>
          ))
        }


      </section>
    </div>
  )
}

export default Cart