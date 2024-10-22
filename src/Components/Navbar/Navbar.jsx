import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.jpeg'
import cart_icon from '../Assets/cart_icon.png'
import heart_icon from '../Assets/heart_icon.jpg'
import nav_dropdown from '../Assets/nav_dropdown.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

    const [menu,setMenu] = useState("shop");
    //const {getTotalCartItems}= useContext(ShopContext);
    const {getTotalCartItems, getTotalWishlistItems} = useContext(ShopContext); // Get wishlist items
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
      menuRef.current.classList.toggle('nav-menu-visible');
      e.target.classList.toggle('open');
    }

  return (
    <div className='navbar'>
      <Link to='/' onClick={()=>{setMenu("shop")}} className="nav-logo">
        <img src={logo} alt="" />
        <p>ECO CHARM</p>
      </Link>
      <img onClick={dropdown_toggle} className='nav-dropdown' src={nav_dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("exfoliators")}}><Link to='/exfoliators'>exfoliators</Link>{menu==="exfoliators"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("cleansers")}}><Link to="cleansers">cleansers</Link>{menu==="cleansers"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("toners")}}><Link to='/toners'>toners</Link>{menu==="toners"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("serums")}}><Link to='/serums'>serums</Link>{menu==="serums"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("moisturizers")}}><Link to='/moisturizers'>moisturizers</Link>{menu==="moisturizers"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("faceoils")}}><Link to='/faceoils'>faceoils</Link>{menu==="faceoils"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("sunscreen")}}><Link to='/sunscreen'>sunscreen</Link>{menu==="sunscreen"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("eyecreams")}}><Link to='/eyecreams'>eyecreams</Link>{menu==="eyecreams"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        {/* Wishlist Icon */}
        <Link to='/wishlist'><img src={heart_icon} alt="" /></Link>
        <div className="nav-wishlist-count">{getTotalWishlistItems()}</div>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
