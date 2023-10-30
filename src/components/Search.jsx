import React from "react";
import { BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <>
      <div className="search-cntr">
        <div className="search-input">
          <input type="text" className="search" placeholder="search..." />
        </div>
        <button className="search-icon">
          <BsSearch fontSize={"2em"} />
        </button>
      </div>
    </>
  );
};

export default Search;
