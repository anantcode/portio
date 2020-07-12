import React from "react";

const Searchbox = ({ searchField, inputChange }) => {
  return (
    <div className="pa3">
      <input
        className="pa2 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Search people..."
        onChange={inputChange}
      />
    </div>
  );
};

export default Searchbox;
