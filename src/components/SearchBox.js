import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="center mw7 mw-7-ns br3 hidden ba b--black-10 mv4">
      <h2 className="tc mt3">Search Notes</h2>
      <input
        className="input-reset center ba b--black-20 pa2 db w-50 mb4"
        type="search"
        placeholder="search notes"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
