import React from "react";
import "./NewsCard.css";
const NewsCard = ({ newsItem }) => {
  {
    console.log(newsItem);
  }
  return (
    <div className="news-card">
      <img alt="img not found" src={newsItem.urlToImage} />
      <div className="text-container">
        <h3 className="title">{newsItem.title}</h3>
        <p className="content"> {newsItem.content}</p>
      </div>
    </div>
  );
};

export default NewsCard;
