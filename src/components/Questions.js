import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./topFaq.css";
import { useHistory, useParams } from "react-router-dom";
import { QuestionData } from "../data/data";
const Questions = () => {
  const { PageName } = useParams();
  const [questions, setQuestions] = useState(null);

  useEffect(() => {
    const requiredData = QuestionData.find((question) => {
      return question.Name === PageName;
    });
    if (requiredData) {
      setQuestions(requiredData);
    }
    console.log();
  }, []);

  return (
    <div className="containerDivider">
      {questions && (
        <div className="container">
          <div className="row subNav justify-content-between">
            <div className="col-md-5">
              <ol class="breadcrumbs">
                <li title="Help Center">
                  <a href="/">Help Center</a>
                </li>
                <li title="Top FAQ">
                  <a href="#">{questions && questions.Name_String}</a>
                </li>
              </ol>
            </div>
          </div>
          <div className="headingWrapper">
            <h3 className="mainHeading">
              {questions && questions.Name_String}
            </h3>
          </div>
          <div className="row d-flex flex-row justify-content-end">
            <div className="col-md-6 col-xl-5">
              {questions.topics[0] ? (
                <Fragment>
                  <h4 className="subHeading">
                    <Link to="TrendingTopics">{questions.topics[0].Name}</Link>
                  </h4>
                  {questions.topics[0].topics.map((topic, index) => {
                    return (
                      <div className="articleLinks" key={index}>
                        <Link to={topic.URL}>{topic.Name}</Link>
                      </div>
                    );
                  })}
                </Fragment>
              ) : null}
            </div>
            <div className="col-md-6 col-xl-5 pt-5 pt-md-0">
              {questions.topics[1] ? (
                <Fragment>
                  <h4 className="subHeading">
                    <Link to="TrendingTopics">{questions.topics[1].Name}</Link>
                  </h4>
                  {questions.topics[1].topics.map((topic, index) => {
                    return (
                      <div className="articleLinks" key={index}>
                        <Link to={topic.URL}>{topic.Name}</Link>
                      </div>
                    );
                  })}
                </Fragment>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Questions;
