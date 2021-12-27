import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Header from "./Header";
import Photos from "./Photos";
import "./SearchEngine.css";

export default function SearchEngine() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);
  const [pexelsResults, setPexelsResults] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    //URL for documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    const pexelsApiKey = `563492ad6f91700001000001a1505f7d1d3045c99b278af6ba29611c`;
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=8"`;
    axios
      .get(pexelsUrl, { headers: { Authorization: `Bearer ${pexelsApiKey}` } })
      .then(handlePexelsResponse);
  }

  function handleChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPexelsResults(response.data.photos);
  }

  return (
    <div className="SearchEngine">
      <div className="row">
        <div className="col-6">
          <form className="row">
            <div className="col-8">
              <input
                type="search"
                className="form-control"
                placeholder="Enter a word"
                autoFocus="on"
                onChange={handleChange}
              ></input>
            </div>
            <div className="col-4">
              <button
                type="submit"
                className="btn btn-dark"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
          <Header results={results} />
          <Results results={results} />
        </div>
        <div className="col-6">
          <Photos pexelsResults={pexelsResults} />
        </div>
      </div>
    </div>
  );
}
