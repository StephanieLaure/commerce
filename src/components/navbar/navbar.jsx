import React, { useState } from "react"; 
import  './navbar.css'
import logo from '../assets/boutique_logo.png'
import cart_icon from '../assets/cart_icon_com.png'
import { Link } from "react-router-dom";


const Navbar = () => {

  const [menu, setMenu]= useState("shop");
    return (
      <div className="navbar">
      <div className="nav_logo">
        <img src={logo} alt="" />
        <p> Boutique</p>
      </div>
      <ul className="navbar-menu">
        
            <li onClick={() =>{ setMenu("shop")}}><Link style={{ textDecoration: 'none'}} to='/'>Shop</Link> {menu==="shop"?<hr/>: <></>}</li>
            <li onClick={() =>{ setMenu("femmes")}}><Link style={{ textDecoration: 'none'}} to='/femmes'> Femme</Link> {menu==="femmes"?<hr/>: <></>}</li>
            <li onClick={() =>{ setMenu("hommes")}}><Link style={{ textDecoration: 'none'}} to='/hommes'> Homme</Link>{menu==="hommes"?<hr/>: <></>}</li>
            <li onClick={() =>{ setMenu("enfants")}}><Link style={{ textDecoration: 'none'}} to='/enfants'> Enfants </Link> {menu==="enfants"?<hr/>: <></>}</li>
        </ul>
      
      <div className="nav-login-cart">
      <Link to='/login'><button>Connexion</button></Link>
      <Link to='/cart'><img src={cart_icon} alt =""/></Link>
      <div className="nav-cart-count"> 0 </div>
      
      </div>
      </div>
        
    
    )
  }
  
  export default Navbar;