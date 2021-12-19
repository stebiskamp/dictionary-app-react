import React from "react";
import Synonyms from "./Synonyms";
import "./Definitions.css";

export default function Definitions(props) {
  return (
    <div className="Definitions">
      {" "}
      {props.definitions.definition}
      <br />
      <em> example: {props.definitions.example}</em>
      <br />
      {props.definitions.synonyms.map(function (synonyms, index) {
        return (
          <span key={index}>
            <Synonyms synonyms={synonyms} />
          </span>
        );
      })}
    </div>
  );
}
