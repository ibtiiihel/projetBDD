import React from 'react'
import { BsShop , BsHeart  } from "react-icons/bs";
import {FiShoppingCart} from "react-icons/fi";
import {BiUser} from "react-icons/bi";
import "./Navbar.css"


const Navbar = () => {

  return (
    <div className='nav'>
		<div className="navbar">

		<div className="logo">  <img id="esport" src="/picture/logowhite.svg"/> </div>

		<div className="elements">
		        <a href="/Hommes">Hommmes</a>
				<a href="/Femmes">Femmes</a>
				<a href="/Enfants">Enfants</a>
				<a href="/Accessoires">Accessoires</a>
                <a href="/Aboutus">Apropos</a>
		</div>

		<div className="icons">
		        <a href='/'> <BsShop /> </a>
                <a href='/favoris'> <BsHeart/></a>
                <a href='/panier'> <FiShoppingCart/></a>
                <a href='/profile'> <BiUser/></a>
		</div>
		</div>
	   
       
    </div>
  )
}

export default Navbar


/**
 * <header>
			<div className="logo"> <img src="/picture/logo.svg"/></div>
			<nav >
				<a href="/Hommes">Hommmes</a>
				<a href="/Femmes">Femmes</a>
				<a href="/Enfants">Enfants</a>
				<a href="/Accessoires">Accessoires</a>
                <a href="/Aboutus">À PROPOS</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>

			<nav>
			    <a href='/'> <BsShop /> </a>
                <a href='/favoris'> <BsHeart/></a>
                <a href='/panier'> <FiShoppingCart/></a>
                <a href='/profile'> <BiUser/></a>
			</nav>

		</header>
 */