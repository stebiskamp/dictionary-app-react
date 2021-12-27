import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.pexelsResults) {
    return (
      <section className="Photos">
        <div className="row">
          {props.pexelsResults.map(function (photos, index) {
            return (
              <div key={index} className="col-6">
                <a href={photos.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photos.src.portrait}
                    className="img-fluid"
                    alt={photos.src.photographer}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
