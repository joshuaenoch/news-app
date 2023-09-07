import React, { useState } from 'react';
import './Navbar.css';

function Navbar({ setCategory, setSearch }) {
  const [searchInput, setSearchInput] = useState('');

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearch = () => {
    setSearch(searchInput);
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
            onChange={handleInputChange}
          />
          <button onClick={handleSearch}>Search</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
