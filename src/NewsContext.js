import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "2fd2af8e25d9463894f10eb25ec86373";

  const { category, search } = props; // Access the category and search props

  useEffect(() => {
    axios
      .get(`https://newsapi.org/v2/top-headlines?q=${search}&country=us&category=${category}&pageSize=100&apiKey=${apiKey}`)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, [category, search]); // Add category and search as dependencies

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};