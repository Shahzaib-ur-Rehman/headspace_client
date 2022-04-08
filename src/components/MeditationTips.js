import React from "react";
import { Link } from "react-router-dom";
import { MeditationTips1, CommonMeditationObstacles } from "../data/data";
import { SearchSVG } from "../images/svg/icons";
import "./topFaq.css";
const MeditationTips = () => {
  return (
    <div className="containerDivider">
      <div className="container">
        <div className="row subNav justify-content-between">
          <div className="col-md-5">
            <ol class="breadcrumbs">
              <li title="Help Center">
                <a href="/">Help Center</a>
              </li>
              <li title="Top FAQ">
                <a href="#"> Meditation Tips</a>
              </li>
            </ol>
          </div>
          <div className="col-md-5 col-lg-4 formSection ">
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
        <div className="headingWrapper">
          <h3 className="mainHeading">Meditation Tips</h3>
        </div>
        <div className="row d-flex flex-row justify-content-end">
          <div className="col-md-6 col-xl-5">
            <h4 className="subHeading">
              <Link to="TrendingTopics">New to Meditation</Link>
            </h4>
            {MeditationTips1.map((topic, index) => {
              return (
                <div className="articleLinks" key={index}>
                  <Link to={topic.URL}>{topic.Name}</Link>
                </div>
              );
            })}
            <span className="seeAllArticles">
              {" "}
              <Link to="/TrendingTopics">See all 15 articles</Link>
            </span>
          </div>
          <div className="col-md-6 col-xl-5 pt-5 pt-md-0">
            <h4 className="subHeading">
              <Link to="KhownIssues">Common Meditation Obstacles</Link>
            </h4>
            {CommonMeditationObstacles.map((knownIssue, index) => {
              return (
                <div className="articleLinks" key={index}>
                  <Link to={knownIssue.URL}>{knownIssue.Name}</Link>
                </div>
              );
            })}
            <span className="seeAllArticles">
              {" "}
              <Link to="/TrendingTopics">See all 17 articles</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeditationTips;
