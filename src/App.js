import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from "./components/News";
import { NewsContextProvider } from './NewsContext';
import "./App.css"

function App() {
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');

  return (
    <div>
      <Navbar setCategory={setCategory} setSearch={setSearch} />
      <NewsContextProvider category={category} search={search} setSearch={setSearch}>
        <div className="news-box">
          <News />
        </div>
      </NewsContextProvider>
    </div>
  );
}

export default App;
