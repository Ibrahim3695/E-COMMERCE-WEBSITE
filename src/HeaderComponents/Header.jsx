import React, { useContext, useState } from 'react'
import "./Header.css"
import { Link, NavLink } from 'react-router-dom'
import { FaOpencart } from 'react-icons/fa'
import { BsCart2 } from 'react-icons/bs'
import { Context } from '../ContextComponents/Context'
import { BiMouse } from 'react-icons/bi'
import 'animate.css';

const Header = () => {
  const { cart } = useContext(Context)

  const [show, setShow] = useState(false)

  return (
    <div className='header-main-div'>
      <article className='image-icon'>
        <FaOpencart size={"35px"} color='rgb(252, 87, 45)' />
        <h1>Modern</h1>
      </article>

      <section className='nav-wrap'>
        <NavLink to="/"
          className={({ isActive, isNotActive }) => isActive ? "active" : "notActive"}>
          Home
        </NavLink>

        {/* <NavLink to="/about"
          className={({ isActive, isNotActive }) => isActive ? "active" : "notActive"}>
          About
        </NavLink> */}

        <p onClick={()=> setShow(!show)} to="/category-drop-down"
          className={({ isActive, isNotActive }) => isActive ? "active" : "notActive"}>
          Category
        </p>

        <BsCart2 className='cart-icon' size={"20px"} />
        <NavLink to="/cart"
          className={({ isActive, isNotActive }) => isActive ? "active" : "notActive"}>
          Cart
        </NavLink>
      </section>


      <article className='toggle-div'>
        <input type="text" placeholder='Seach Product' />
        <button>SEARCH</button>
      </article>

      {cart.length === 0 ? null : <section className='round-count'>{cart.length}</section>}

      {
        show ? <section className='category-drop-down' >
        <Link to={"./mencloth"} className='p'>Men's clothing</Link>
        <Link to={"/jewelery"} className='p'>Jewelery</Link>
        <Link to={"/electronics"} className='p'>Electronics</Link>
        <Link to={"/women'sclothing"} className='p'>Women's clothing</Link>
      </section> : null 
      }
    </div>
  )
}

export default Header