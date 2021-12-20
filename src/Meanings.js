import React from "react";
import Definitions from "./Definitions.js";
import "./Meanings.css";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h5>
        <strong className="text-capitalize">
          {" "}
          {props.meanings.partOfSpeech}
        </strong>
      </h5>
      <h6>
        {props.meanings.definitions.map(function (definitions, index) {
          return (
            <div key={index}>
              <Definitions definitions={definitions} data={index} />
            </div>
          );
        })}
      </h6>
      <br />
    </div>
  );
}
