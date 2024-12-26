import React from 'react'
import './Navigation.css'
import { IoMdSearch, IoIosLogOut  } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";


function Navigation() {
  return (
    <div className='nav_container'>
        <div className='nav_logo_container'>
            <h3><a className='nav_logo'>Shopsy</a></h3>
        </div>
        <div className='nav_items_container'>
            <ul className='nav_items'>
                <li className='nav_item'>Shop</li>
                <li className='nav_item'>Men</li>
                <li className='nav_item'>Women</li>
                <li className='nav_item'>Kids</li>
            </ul>
        </div>
        <div className='nav_search_container'>
            <div className='nav_search'>
                <IoMdSearch/>
                <input id="search" type="text" placeholder='Search' className='nav_search_bar'></input>
            </div>
        </div>
        <div className='nav_symbols_container'>
            <a href="#" ><CiHeart className='nav_symbol'/></a>
            <a href="#" ><CgProfile className='nav_symbol'/></a>
            <a href="#" ><IoCartOutline className='nav_symbol'/></a>
            <a href="#" ><IoIosLogOut className='nav_symbol'/></a>
        </div>
    </div>
  )
}

export default Navigation