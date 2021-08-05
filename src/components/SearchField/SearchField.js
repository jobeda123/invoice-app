import React from "react";
import "./SearchField.css";
import { useState } from "react";
import { UserContext } from "../../App";
import { useContext } from "react";

const SearchField = () => {
  const [search, setSearch] = useState("");
  const [user, setUser] = useContext(UserContext);


  const searchText = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <div className="row searchArea">
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
          Search
        </button>
      </div>

      <div className="col-md-4 userName">
        <p>Hi,<span> {user.name}</span></p>
      </div>
    </div>
  );
};

export default SearchField;
