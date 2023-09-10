import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "2fd2af8e25d9463894f10eb25ec86373";

  const { category, search, startDate, endDate, language } = props; // Access the category and search props

  useEffect(() => {
    if (search) { // Check if search has a value
      axios
        .get(`https://newsapi.org/v2/everything?q=${search}&pageSize=100&apiKey=${apiKey}&from=${startDate}&to=${endDate}&language=${language}`)
        .then((response) => setData(response.data))
        .catch((error) => console.log(error));

    } else {
      // Call a different axios.get request when search is empty

      axios
        .get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=100&apiKey=${apiKey}&from=${startDate}&to=${endDate}&language=${language}`)
        .then((response) => setData(response.data))
        .catch((error) => console.log(error));
    }
  }, [category, search, endDate, startDate, language]); // Add category and search as dependencies

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};