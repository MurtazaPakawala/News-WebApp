import NavNews from "./components/NavNews";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import NewsContent from "./components/NewsContent/NewsContent";

function App() {
  const [Category, setCategory] = useState("general");
  const [newsArray, setnewsArray] = useState([]);
  const [newsResult, setnewsResult] = useState();

  const newsApi = async () => {
    try {
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=au&category=${Category}&apiKey=${process.env.REACT_APP_API_KEY}`
      );
      setnewsArray(news.data.articles);
      setnewsResult(news.data.totalResults);
      // console.log(news);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    newsApi();
  }, [Category, newsResult]);
  // console.log(newsArray);
  return (
    <div className="App">
      <NavNews setCategory={setCategory} />
      <NewsContent
        newsArray={newsArray}
        newsResult={newsResult}
        Category={Category}
      />
    </div>
  );
}

export default App;
