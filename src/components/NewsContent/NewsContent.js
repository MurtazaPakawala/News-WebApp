import { Container } from "@mui/system";
import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsContent.css";
const NewsContent = ({ newsArray, newsResult, Category }) => {
  return (
    <Container>
      <h1>{Category}</h1>
      <div className="news-container">
        {newsArray.map((newsItem) => {
          return <NewsCard newsItem={newsItem} key={newsItem.title} />;
        })}
      </div>
    </Container>
  );
};

export default NewsContent;
