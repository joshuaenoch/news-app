import React from "react";

function NewsArticle({ data }) {
  if (data.title === "[Removed]") {
    return null; // Don't render anything if the title is "[Removed]"
  }
  return (
    <div className="news">
      <img src={data.urlToImage} alt={""} className="news-image" />
      <div className="article-info">
        <a href={data.url} target="_blank" rel="noopener noreferrer">
          <p className="news-title">{data.title}</p>
        </a >
        <p className="news-desc">{data.description}</p>
        <span className="news-author">{data.author}</span>
        <span className="news-published">{data.publishedAt}</span>
        <span className="news-source"><strong>{data.source.name}</strong></span>
      </div>
    </div >
  );
}

export default NewsArticle;