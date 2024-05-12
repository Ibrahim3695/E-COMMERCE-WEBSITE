import React from 'react'
import "./Header.css"
import { Link, NavLink } from 'react-router-dom'
import { FaOpencart } from 'react-icons/fa'
import { BsCart2 } from 'react-icons/bs'

const Header = () => {
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

        <NavLink to="/about"
          className={({ isActive, isNotActive }) => isActive ? "active" : "notActive"}>
          About
        </NavLink>

        <NavLink to="/category"
          className={({ isActive, isNotActive }) => isActive ? "active" : "notActive"}>
          Category
        </NavLink>

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
    </div>
  )
}

export default Header