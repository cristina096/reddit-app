import { NavLink} from 'react-router-dom';
import '../styles/NavBar.css'
import React, {useState} from 'react'

function NavBar() {

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        event.preventDefault();
        const url = `/${searchTerm}`; 
        setSearchTerm(""); 
        window.location.href = url; 
      };

return (
    <nav className = 'primary-nav'>
        <NavLink to ="/popular">
        <button className = 'reddit-logo' >
            <img src = {process.env.PUBLIC_URL + '/images/reddit.png'} alt = "Reddit logo"/>
        </button>
        </NavLink>

        <NavLink to = "/popular" className = "link-style">Home</NavLink>

        <div className = "categories">
            <div className="category">
            <ul className = "link-style">Categories</ul>
            <img src = {process.env.PUBLIC_URL + '/images/down-arrow.png'} alt = "Down arrow"/>
            </div>
            <div className='dropdown-menu'>
                <ul className='left-items'>
                    <li><NavLink to = "/funny" className = "cat-list">Funny</NavLink></li>
                    <li><NavLink to = "/animals" className = "cat-list">Animals</NavLink></li>
                    <li><NavLink to = "/games" className = "cat-list">Games</NavLink></li>
                </ul>

                <ul className='right-items'>
                    <li><NavLink to = "/news" className = "cat-list">News</NavLink></li>
                    <li><NavLink to = "/science" className = "cat-list">Science</NavLink></li>
                    <li><NavLink to = "/planet" className = "cat-list">Planet</NavLink></li>
                </ul>
            </div>
        </div>

        <div className="search-bar">
            <img src = {process.env.PUBLIC_URL + '/images/magnifier.png'} alt = "Magnifier"/>
            <form onSubmit={handleSearch}>
                <input type = "text" name = "search-term"  value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}/>
            </form>
        </div>
    </nav>
) 

}


export default NavBar;