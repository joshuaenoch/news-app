import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "d3a68d3a93a54948a016a1553bc4d20c";

  const { category, search } = props; // Access the category and search props

  useEffect(() => {
    if (search) { // Check if search has a value
      axios
        .get(`https://newsapi.org/v2/everything?q=${search}&pageSize=100&apiKey=${apiKey}`)
        .then((response) => setData(response.data))
        .catch((error) => console.log(error));

    } else {
      // Call a different axios.get request when search is empty

      axios
        .get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=100&apiKey=${apiKey}`)
        .then((response) => setData(response.data))
        .catch((error) => console.log(error));
    }
  }, [category, search]); // Add category and search as dependencies

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};
