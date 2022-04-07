import React from "react";
import { SearchSVG } from "../images/svg/icons";
import "./searchSection.css";
const SearchSection = () => {
  return (
    <div className="row searchSection d-flex justify-content-center align-items-center m-0">
      <div className="col-md-6 formSection">
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
  );
};

export default SearchSection;
