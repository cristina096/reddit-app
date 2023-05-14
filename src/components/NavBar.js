import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css'
import React, {useEffect, useState} from 'react'

function NavBar() {

return (
    <nav className = 'primary-nav'>
        <NavLink to ="/home">
        <button className = 'reddit-logo' >
            <img src = {process.env.PUBLIC_URL + '/images/reddit.png'} alt = "Reddit logo"/>
        </button>
        </NavLink>

        <NavLink to = "/home" className = "link-style">Home</NavLink>

        <div className = "categories">
            <div className="category">
            <ul className = "link-style">Categories</ul>
            <img src = {process.env.PUBLIC_URL + '/images/down-arrow.png'} alt = "Down arrow"/>
            </div>
            <div className='dropdown-menu'>
                <ul className='left-items'>
                    <li><NavLink to = "/home" className = "cat-list">Funny</NavLink></li>
                    <li><NavLink to = "/home" className = "cat-list">Animals</NavLink></li>
                    <li><NavLink to = "/home" className = "cat-list">Games</NavLink></li>
                </ul>

                <ul className='right-items'>
                    <li><NavLink to = "/home" className = "cat-list">News</NavLink></li>
                    <li><NavLink to = "/home" className = "cat-list">Science</NavLink></li>
                    <li><NavLink to = "/home" className = "cat-list">Planet</NavLink></li>
                </ul>
            </div>
        </div>

        <div className="search-bar">
            <img src = {process.env.PUBLIC_URL + '/images/magnifier.png'} alt = "Magnifier"/>
            <form>
                <input type = "text" name = "search-term" />
            </form>
        </div>
    </nav>
) 

}


export default NavBar;