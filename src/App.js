import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from "./components/News";
import { NewsContextProvider } from './NewsContext';
import "./App.css"

function App() {
  const [category, setCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <Navbar setCategory={setCategory} />
      <NewsContextProvider category={category} setSearchQuery={setSearchQuery}>
        <div className="news-box">
          <News />
        </div>
      </NewsContextProvider>
    </div>
  );
}

export default App;
