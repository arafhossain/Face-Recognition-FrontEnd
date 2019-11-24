import React, { Component } from "react";
import "../FaceRecognition.css";

export default class FaceRecognition extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { imageLink, box } = this.props;
    return (
      <div className="center ma">
        <div className="absolute mt2">
          <img
            src={imageLink}
            id="image"
            alt="Sample"
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
  }
}
