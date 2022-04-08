import React from "react";
import { Link } from "react-router-dom";
import {
  ContactingCustomerSupport,
  PartnershipInquiries,
  ProfileSettings,
} from "../data/data";
import { SearchSVG } from "../images/svg/icons";
import "./topFaq.css";
const AccountSettings = () => {
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
                <a href="#"> Account Settings</a>
              </li>
            </ol>
          </div>
          {/* <div className="col-md-5 col-lg-4 formSection ">
            <div className="searchIcon">
              <SearchSVG />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="form-control formInput"
            ></input>
          </div> */}
        </div>
        <div className="headingWrapper">
          <h3 className="mainHeading">Account Settings</h3>
        </div>
        <div className="row d-flex flex-row justify-content-around">
          <div className="col-md-6 col-xl-5">
            <h4 className="subHeading">
              <Link to="TrendingTopics">Profile Settings</Link>
            </h4>
            {ProfileSettings.map((topic, index) => {
              return (
                <div className="articleLinks" key={index}>
                  <Link to={topic.URL}>{topic.Name}</Link>
                </div>
              );
            })}
            <span className="seeAllArticles">
              {" "}
              <Link to="/TrendingTopics">See all 7 articles</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
