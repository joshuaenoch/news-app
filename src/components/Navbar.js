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
        <li onClick={() => { setCategory(""); setSearch(""); }}>Top Headlines</li>
        <li onClick={() => { setCategory("business"); setSearch(""); }}>Business</li>
        <li onClick={() => { setCategory("entertainment"); setSearch(""); }}>Entertainment</li>
        <li onClick={() => { setCategory("health"); setSearch(""); }}>General Health</li>
        <li onClick={() => { setCategory("science"); setSearch(""); }}>Science</li>
        <li onClick={() => { setCategory("sports"); setSearch(""); }}>Sports</li>
        <li onClick={() => { setCategory("technology"); setSearch(""); }}>Technology</li>
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