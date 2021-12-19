import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import Header from "./Header.js";
import "./SearchEngine.css";

export default function SearchEngine() {
  const [keyword, setKeyword] = useState(null);
  const [results, setResults] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    //URL for documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  return (
    <div className="SearchEngine">
      <form className="row">
        <div className="col-4">
          <input
            type="search"
            className="form-control"
            placeholder="Enter a word"
            autoFocus="on"
            onChange={handleChange}
          ></input>
        </div>

        <div className="col-1">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
        <div className="col-4">
          <Header results={results} />
        </div>
      </form>
      <Results results={results} />
    </div>
  );
}
