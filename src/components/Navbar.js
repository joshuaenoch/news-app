import React, { useState } from 'react';
import './Navbar.css';

function Navbar({ setCategory, setSearchQuery }) {

    // State variable to store the input value
    const [searchInput, setSearchInput] = useState("");

    // Update the searchInput state variable when the user types
    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    // Function to handle the search action
    const handleSearch = () => {
        setSearchQuery(searchInput);
        console.log("Search Input:", searchInput);
    };



    return (
        <nav className="navbar">
            <ul className='types'>
                <li onClick={() => setCategory("")}>Top Headlines</li>
                <li onClick={() => setCategory("business")}>Business</li>
                <li onClick={() => setCategory("entertainment")}>Entertainment</li>
                <li onClick={() => setCategory("health")}>General Health</li>
                <li onClick={() => setCategory("science")}>Science</li>
                <li onClick={() => setCategory("sports")}>Sports</li>
                <li onClick={() => setCategory("technology")}>Technology</li>
                <li>
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchInput}
                        onChange={handleSearchInputChange}
                    />
                    <button onClick={handleSearch}>Search</button>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
