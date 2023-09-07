import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "d3a68d3a93a54948a016a1553bc4d20c";

  const { category, search } = props; // Access the category and search props

  useEffect(() => {
      axios.get(`https://newsapi.org/v2/top-headlines?q=${search}&country=us&category=${category}&apiKey=${apiKey}`)
        .then((response) => setData(response.data))
        .catch((error) => console.log(error));
  }, [category, search]); // Add category and search as dependencies

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};
