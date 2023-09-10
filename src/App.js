import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from "./components/News";
import Sidebar from "./components/Sidebar"
import { NewsContextProvider } from './NewsContext';
import "./App.css"

function App() {
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');
  const [startDate, setStartDate] = useState('');
  const [language, setLanguage] = useState('');

  return (
    <div>
      <Navbar setCategory={setCategory} setSearch={setSearch} />
      <div className="body-container">
        <Sidebar startDate={setStartDate} language={setLanguage} />
        < NewsContextProvider category={category} search={search}>
          <div className="news-box">
            <News />
          </div>
        </NewsContextProvider>
      </div>
    </div >
  );
}

export default App;