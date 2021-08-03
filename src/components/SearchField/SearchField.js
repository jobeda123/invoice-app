import React from "react";
import "./SearchField.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const SearchField = () => {
  const [search, setSearch] = useState("");

  const searchText = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <div className="row d-flex justify-content-center" style={{border: "1px solid black"}}>
      <div className="inputArea col-md-8">
        <input
          id="searchField"
          type="search"
          onBlur={(e) => searchText(e)}
          placeholder="Search Invoice By Item"
        ></input>
        <button
          className="commonBtn"
          onClick={() => {
            console.log("search btn click");
          }}
        >
          {/* <span>
            <FontAwesomeIcon icon={faSearch} />
          </span> */}
          Search
        </button>
      </div>

      <div className="col-md-4 userName">
        <p>User name</p>
      </div>
    </div>
  );
};

export default SearchField;
