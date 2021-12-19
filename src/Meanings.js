import React from "react";
import Definitions from "./Definitions.js";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h5>{props.meanings.partOfSpeech}</h5>
      <h6>
        {props.meanings.definitions.map(function (definitions, index) {
          return (
            <div key={index}>
              <Definitions definitions={definitions} />
            </div>
          );
        })}
      </h6>
    </div>
  );
}
