import React from "react";
import { cardsContent } from "../data/data";
import "./trendingTopicsDetail.css";
import image1 from "../images/iamge1.png";
import image4 from "../images/image4.png";
const TrendingTopicsDetail = () => {
  return (
    <div className="containerDivider">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-lg-3">
            <h3 className="sideNavHeading">Articles in this section</h3>
            {cardsContent.map((card) => {
              return (
                <div className="storeCard">
                  <span className="storeAddress">{card}</span>
                </div>
              );
            })}
          </div>

          <div className="col-md-8">
            <h2 className="heading2">New to Headspace? How to get started!</h2>
            <section className="contentSection">
              <p>
                New to Headspace? How to get started! If you're new to Headspace
                or if you've recently returned after a break - welcome! If
                you're a returning member, you might have noticed we have some
                new features and content which weren't available before. New
                stuff is always exciting, but we know it just makes it a little
                bit harder to figure out how to get started. Below is a simple
                breakdown on how to navigate our content library.
              </p>
              <div className="contentImage">
                <img src={image1}></img>
              </div>
              {/* <div className="row">
              <div className="col-md-12">
                <img src={image1}></img>
              </div>
            </div> */}
              <p>
                Today tab: We offer a playlist of sorts with favorite and/or
                featured content which you might enjoy throughout the day. The
                Wake Up and Today's Meditation are in the top favorites with our
                Headspace community! Meditate tab: We offer a comprehensive
                guide featuring our meditation sessions and courses taught by
                different teachers. Sleep tab: We offer tons of options to help
                you wind down for the night, sleep better and develop better
                sleep habits. Our Sleepcasts are a member favorite and we have
                many to choose from.
              </p>
              {/* <div className="row">
              <div className="col-md-12">
                <img src={image4}></img>
              </div>
            </div> */}
              <div className="contentImage">
                <img src={image4}></img>
              </div>
              <p>
                {" "}
                Move tab: We offer many mind-body fitness sessions guided by
                expert trainers. The Move sessions are designed to help members
                strengthen both their mind and their body, together. Focus tab:
                We offer sounds, music and exercises to help you focus for
                school, studying, work, tasks or simply to help you relax.
                Search feature: If you know what you're looking for and you'd
                rather search for content, you can use our Search field to check
                out out collections. We hope that's helpful! But, if you have
                any questions on how to get started, send us a note at
                help@headspace. We're happy to help!
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingTopicsDetail;
