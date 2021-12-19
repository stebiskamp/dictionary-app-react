import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  return (
    <span className="Synonyms">
      {" "}
      <small> "{props.synonyms}" </small>
    </span>
  );
}
