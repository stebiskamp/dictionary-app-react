import React from "react";
import Meanings from "./Meanings";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <div className="Background">
          {props.results.meanings.map(function (meanings, index) {
            return (
              <div key={index}>
                <Meanings meanings={meanings} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
