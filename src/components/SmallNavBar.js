import { NavLink } from 'react-router-dom';
import '../styles/SmallNavBar.css'
import React, {useEffect, useState} from 'react'

function SmallNavBar() {

const [showCategories, setShowCategories] = useState(false);
const [searchTerm, setSearchTerm] = useState("");

const toggleCategories = () => {
    setShowCategories(!showCategories);
};

const handleSearch = (event) => {
    event.preventDefault();
    const url = `/${searchTerm}`; 
    setSearchTerm(""); 
    window.location.href = url; 
  };

const showSearchBar = () => {
   document.getElementsByClassName('small-reddit-logo')[0].style.display = 'none';
   document.getElementsByClassName('menu')[0].style.display = 'none';
   document.getElementsByClassName('magnifier')[0].style.display = 'none';
   document.getElementsByClassName('exit')[0].style.display = 'block';
   document.getElementsByClassName('small-search-bar')[0].style.display = 'flex';
}

const showMenu = () => {
    document.getElementsByClassName('small-reddit-logo')[0].style.display = 'block';
    document.getElementsByClassName('menu')[0].style.display = 'block';
    document.getElementsByClassName('magnifier')[0].style.display = 'block';
    document.getElementsByClassName('exit')[0].style.display = 'none';
    document.getElementsByClassName('small-search-bar')[0].style.display = 'none';
}


return (
     <nav className='primary-nav'>
        <NavLink to ="/popular">
        <button className = 'small-reddit-logo' >
            <img src = {process.env.PUBLIC_URL + '/images/reddit.png'} alt = "Reddit logo"/>
        </button>
        </NavLink>

        <button onClick = {toggleCategories} className='small-menu'>
        <div className = 'menu'>
            <img src = {process.env.PUBLIC_URL + '/images/menu.png'} alt = "Menu"/>
        </div>
        </button>

        <div className={`small-dropdown-menu ${showCategories ? 'visible' : 'hidden'}`}>
                <ul className='small-left-items'>
                    <li><NavLink to = "/funny" className = "small-cat-list">Funny</NavLink></li>
                    <li><NavLink to = "/animals" className = "small-cat-list">Animals</NavLink></li>
                    <li><NavLink to = "/games" className = "small-cat-list">Games</NavLink></li>
                </ul>

                <ul className='small-right-items'>
                    <li><NavLink to = "/news" className = "small-cat-list">News</NavLink></li>
                    <li><NavLink to = "/science" className = "small-cat-list">Science</NavLink></li>
                    <li><NavLink to = "/planet" className = "small-cat-list">Planet</NavLink></li>
                </ul>
        </div>


        <button className="magnifier" onClick={showSearchBar}>
            <img src = {process.env.PUBLIC_URL + '/images/magnifier.png'} alt = "Magnifier"/>
        </button>

        <div className="small-search-bar">
            <form onSubmit={handleSearch}>
                <input className = 'input-search' type = "text" name = "search-term" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}/>
            </form>
        </div>

        <button className="exit" onClick={showMenu}>
            <img src = {process.env.PUBLIC_URL + '/images/cross.png'} alt = "Exit"/>
        </button>
        
     </nav>   
)

}

export default SmallNavBar;  