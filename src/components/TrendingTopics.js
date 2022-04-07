import React from "react";
import { Link } from "react-router-dom";
import { trendingTopics } from "../data/data";
import { SearchSVG } from "../images/svg/icons";
import "./trendingTopics.css";
const TrendingTopics = () => {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-md-5 ">
          <ol class="breadcrumbs">
            <li title="Help Center">
              <a href="/">Help Center</a>
            </li>
            <li title="Top FAQ">
              <Link to="TopFaq">Top FAQ</Link>
            </li>
            <li title="Trending Topics">
              <Link to="TopFaq/TrendingTopics"> Trending Topics</Link>
            </li>
          </ol>
        </div>
        <div className="col-md-4 formSection " style={{ marginLeft: "250px" }}>
          <div className="searchIcon">
            <SearchSVG />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="form-control formInput"
          ></input>
        </div>
      </div>
      <div className="row d-flex justify-content-center p-3">
        <div className="col-md-8 ">
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
        </div>
      </div>
    </div>
  );
};

export default TrendingTopics;
