import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.data === 0) {
    return (
      <span className="Synonyms">
        <small> synonyms: {props.synonyms} </small>
      </span>
    );
  } else if (props.data > 0) {
    return (
      <span className="Synonyms">
        <small> - {props.synonyms} </small>
      </span>
    );
  } else {
    return null;
  }
}
