import React from "react";

function NewsArticle({ data }) {
  if (data.title === "[Removed]") {
    return null; // Don't render anything if the title is "[Removed]"
  }
  return (
    <div className="news">
      <a href={data.url}>
        <h1 className="news__title">{data.title}</h1>
      </a >
      <img src={data.urlToImage} alt={"No image found"} className="news__image" /><br />
      <span className="news__author">{data.author}</span> <br />
      <p className="news__desc">{data.description}</p>
      <span className="news__author">{data.author}</span> <br />
      <span className="news__published">{data.publishedAt}</span>
      <span className="news__source">{data.source.name}</span>
    </div >
  );
}

export default NewsArticle;