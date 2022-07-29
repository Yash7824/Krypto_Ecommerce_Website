import React from 'react'
import '../CSS/Navbar.css'
import shoppingCart from '../Images/shopping_cart.png'

export default function navbar() {
  return (
    <nav>
      <h1>ShopKart</h1>
      <ul>
        <li><a href="/products">Products</a></li>
        <li><a href="./Login">login</a></li>
        <li><a href="/"><img className = "logo_small" src={shoppingCart} alt="Not available" /></a></li>
      </ul>
    </nav>
  )
}
