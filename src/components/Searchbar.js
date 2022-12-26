import React from 'react'
import {  BsSearch } from "react-icons/bs";
import "./Searchbar.css"

const Searchbar = () => {
  return (
    <div className='Searchbar'>
         <span className='icon'> <BsSearch/> </span>
      <input type="text" placeholder="Rechercher" className='input' />
    </div>
  )
}

export default Searchbar
