import React from "react";
import "./Header.css";
import ReactAudioPlayer from "react-audio-player";

export default function Header(props) {
  if (props.results) {
    console.log(props.results);
    return (
      <div className="Header text-capitalize">
        {props.results.word}
        <span className="Phonetic"> {props.results.phonetics[0].text}</span>
        <div className="Player">
          <ReactAudioPlayer
            src={props.results.phonetics[0].audio}
            autoPlay={false}
            controls
          />
        </div>
      </div>
    );
  } else {
    return null;
  }
}
