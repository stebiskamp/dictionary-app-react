import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import "./Definitions.css";

export default function Definitions(props) {
  return (
    <div className="Definitions">
      {" "}
      <br />
      <strong>
        {props.data + 1}. {props.definitions.definition}
      </strong>
      <Example example={props.definitions.example} />
      {props.definitions.synonyms.map(function (synonyms, index) {
        return (
          <span key={index}>
            <Synonyms synonyms={synonyms} data={index} />
          </span>
        );
      })}
    </div>
  );
}
