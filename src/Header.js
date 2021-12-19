import React from "react";
import "./Header.css";

export default function Header(props) {
  if (props.results) {
    return (
      <div className="Header">
        {props.results.word}
        <span className="Phonetic"> {props.results.phonetic}</span>
      </div>
    );
  } else {
    return null;
  }
}
