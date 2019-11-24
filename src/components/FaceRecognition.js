import React, { Component } from "react";
import "../FaceRecognition.css";

export let FaceRecognition = ({ imageLink, box }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          src={imageLink}
          id="image"
          alt=""
          width="500px"
          height="auto"
        />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol
          }}
        ></div>
      </div>
    </div>
  );
};
