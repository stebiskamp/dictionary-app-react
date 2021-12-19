import React from "react";
import Synonyms from "./Synonyms";

export default function Definitions(props) {
  return (
    <div>
      {" "}
      {props.definitions.definition}
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
