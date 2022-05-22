import NavNews from "./components/NavNews";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import NewsContent from "./components/NewsContent/NewsContent";
import apikey from "./category/config";
function App() {
  const [Category, setCategory] = useState("general");
  const newsApi = async () => {
    try {
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=au&category=${Category}&apiKey=${apikey}`
      );
      console.log(news);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    newsApi();
  }, []);
  return (
    <div className="App">
      <NavNews />
      <NewsContent />
    </div>
  );
}

export default App;
