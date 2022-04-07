import React from "react";
import { Link } from "react-router-dom";
import { trendingTopics } from "../data/data";
const TopFaq = () => {
  return (
    <div className="container">
      <h1>Top FAQ</h1>
      <div className="row">
        <div className="col-md-6">
          <h4>
            <Link to="TrendingTopics">Trending Topics</Link>
          </h4>
          {trendingTopics.map((topic, index) => {
            return (
              <div key={index}>
                <Link to={topic.URL}>{topic.Name}</Link>
                <hr />
              </div>
            );
          })}
          <Link to="TrendingTopics">See all 8 articles</Link>
        </div>
        <div className="col-md-6">
          <h4>
            <Link to="KnownIssues">Known Issues</Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default TopFaq;
