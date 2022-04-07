import React from "react";
import { Link } from "react-router-dom";
import { knownIssues, trendingTopics } from "../data/data";
import { SearchSVG } from "../images/svg/icons";
import "./topFaq.css";
const TopFaq = () => {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-md-5 ">
          <ol class="breadcrumbs">
            <li title="Help Center">
              <a href="/">Help Center</a>
            </li>
            <li title="Top FAQ">
              <a href="#">Top FAQ</a>
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
      <div className="row d-flex flex-row justify-content-end">
        <h3 className="mainHeading">Top FAQ</h3>
        <div className="col-md-5 ">
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
          <Link to="/TrendingTopics">See all 8 articles</Link>
        </div>
        <div className="col-md-5">
          <h4>
            <Link to="KhownIssues">Khown Issues</Link>
          </h4>
          {knownIssues.map((knownIssue, index) => {
            return (
              <div key={index}>
                <Link to={knownIssue.URL}>{knownIssue.Name}</Link>
                <hr />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopFaq;
