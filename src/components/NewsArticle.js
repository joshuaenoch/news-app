import React from "react";

function NewsArticle({ data }) {
  if (data.title === "[Removed]") {
    return null; // Don't render anything if the title is "[Removed]"
  }
  return (
    <div className="news">
      <img src={data.urlToImage} alt={""} className="news__image" />
      <div className="article-info">
        <a href={data.url} target="_blank" rel="noopener noreferrer">
          <p className="news__title">{data.title}</p>
        </a >
        <p className="news__desc">{data.description}</p>
        <span className="news__author">{data.author}</span>
        <span className="news__published">{data.publishedAt}</span>
        <span className="news__source"><strong>{data.source.name}</strong></span>
      </div>
    </div >
  );
}

export default NewsArticle;