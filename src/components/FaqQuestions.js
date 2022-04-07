import React from "react";
import "./faqsection.css";
import { Link } from "react-router-dom";
const FaqQuestions = ({ data }) => {
  const { Name, URL } = data;
  return (
    <div className="col-md-4 ">
      <div class="card cardSection d-flex justify-content-center align-items-center">
        <div class="card-body cardHeading">
          <Link to={URL}>{Name}</Link>
        </div>
      </div>
    </div>
  );
};

export default FaqQuestions;
