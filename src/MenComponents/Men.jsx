import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'

import "./Men.css"
import { Context } from '../ContextComponents/Context'

const Men = () => {

  const [getAllProducts, setGetAllProducts] = useState([])

  const { dispatch } = useContext(Context)

  useEffect(() => {
    const fetctProducts = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products/category/men's clothing");
        setGetAllProducts(res.data)
        console.log(res.data)
      } catch (error) {
        console.log(error)
      }
    };

    fetctProducts()
  }, [])



  const handleAddToCart = (i) => {
    dispatch({ type: "AddToCart", payload: i })
  }

  return (
    <div className='card-main-div'>
      {
        getAllProducts.map((i) => (
          <article className='card-map' key={i.id}>
            <section className='image-border'>
              <img src={i.image} alt="" />
            </section>
            <p>{i.title}</p>

            <p className='amount'>${i.price}</p>

            <button className='BTN' onClick={() => handleAddToCart(i)}>Add to cart</button>
            <aside className='category-abs' style={{ background: i.category === "men's clothing" ? "#09A896" : i.category == "electronics" ? "#09A896" : i.category == "jewelery"?"#09A896" : "#09A896" }}>{i.category}</aside>
          </article>
        ))
      }
    </div>
  )
}

export default Men