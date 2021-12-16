import React, { useState } from "react";
import "./SearchEngine.css";

export default function SearchEngine() {
  const [keyword, setKeyword] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    alert(keyword);
  }

  function handleChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  return (
    <div className="SearchEngine">
      <form className="row">
        <div class="col-4">
          <input
            type="search"
            className="form-control"
            placeholder="Username"
            onChange={handleChange}
          ></input>
        </div>

        <div class="col-4">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
