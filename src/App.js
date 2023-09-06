import React, { createContext, useEffect, useState } from "react";
import { NewsContextProvider } from "./NewsContext";
import News from "./components/News";
import "./App.css";
import Navbar from "./components/Navbar.js"

function App() {
  return (
    <div>
      <Navbar />
      <NewsContextProvider>
        <div className = "news-box">
          <News />
        </div>

      </NewsContextProvider>
    </div>

  );
}

export default App;