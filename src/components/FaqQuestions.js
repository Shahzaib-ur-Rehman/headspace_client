import React from "react";
import "./faqsection.css";
const FaqQuestions = (props) => {
  return (
    <div className="col-md-6 col-lg-4">
      <div class="card cardSection d-flex justify-content-center align-items-center">
        <div class="card-body cardHeading">{props.data}</div>
      </div>
    </div>
  );
};

export default FaqQuestions;
