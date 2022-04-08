import React from "react";
import { Link } from "react-router-dom";
import {
  MeditationTips1,
  CommonMeditationObstacles,
  HeadspaceScience,
  MindfulnessScience,
} from "../data/data";
import { SearchSVG } from "../images/svg/icons";
import "./topFaq.css";
const ScientificBenefitsOfMeditation = () => {
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
                <a href="#"> Scientific Benefits of Meditation</a>
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
          <h3 className="mainHeading"> Scientific Benefits of Meditation</h3>
        </div>
        <div className="row d-flex flex-row justify-content-end">
          <div className="col-md-6 col-xl-5">
            <h4 className="subHeading">
              <Link to="TrendingTopics">Headspace Science</Link>
            </h4>
            {HeadspaceScience.map((topic, index) => {
              return (
                <div className="articleLinks" key={index}>
                  <Link to={topic.URL}>{topic.Name}</Link>
                </div>
              );
            })}
          </div>
          <div className="col-md-6 col-xl-5 pt-5 pt-md-0">
            <h4 className="subHeading">
              <Link to="KhownIssues">Mindfulness Science</Link>
            </h4>
            {MindfulnessScience.map((knownIssue, index) => {
              return (
                <div className="articleLinks" key={index}>
                  <Link to={knownIssue.URL}>{knownIssue.Name}</Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScientificBenefitsOfMeditation;
