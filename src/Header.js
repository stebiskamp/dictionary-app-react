import React from "react";
import "./Header.css";
import ReactAudioPlayer from "react-audio-player";

export default function Header(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="Header text-capitalize">
        {props.results.word}
        <span className="Phonetic"> {props.results.phonetic}</span>
        <ReactAudioPlayer
          src={props.results.phonetics[0].audio}
          autoPlay={false}
          controls
        />
      </div>
    );
  } else {
    return null;
  }
}
