import React, { Component } from "react";
import Tilt from "react-tilt";
import brainLogo from "../images/brainIcon.png";
export default class Logo extends Component {
  render() {
    let styles = {
      Tilt: {
        width: 150
      },
      innerTilt: {
        background:
          "linear-gradient(90deg,rgba(2, 0, 36, 1) 0%,rgba(90, 9, 121, 1) 35%,rgba(0, 132, 255, 1) 100%)"
      }
    };
    return (
      <div className="ma4">
        <Tilt className="Tilt br2 shadow-2" options={{ max: 55 }} style={styles.Tilt}>
          <div className="Tilt-inner pa3" style={styles.innerTilt}>
            <img src={brainLogo} alt="Logo" />
          </div>
        </Tilt>
      </div>
    );
  }
}
