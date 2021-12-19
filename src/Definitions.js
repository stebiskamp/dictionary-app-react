import React from "react";
import Synonyms from "./Synonyms";

export default function Definitions(props) {
  console.log(props.definitions);
  return (
    <div>
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
