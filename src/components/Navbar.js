import React, { useState } from 'react';
import './Navbar.css';

function Navbar({ setCategory }) {
    const handleClick = (newCategory) => {
      setCategory(newCategory);
    };

    return (
        <nav className="navbar">
            <ul>
                <li onClick={() => handleClick("")}>Top Headlines</li>
                <li onClick={() => handleClick("business")}>Business</li>
                <li onClick={() => handleClick("entertainment")}>Entertainment</li>
                <li onClick={() => handleClick("health")}>General Health</li>
                <li onClick={() => handleClick("science")}>Science</li>
                <li onClick={() => handleClick("sports")}>Sports</li>
                <li onClick={() => handleClick("technology")}>Technology</li>
                <li>Search bar placeholder</li>
            </ul>
        </nav>
    );
}

export default Navbar;
