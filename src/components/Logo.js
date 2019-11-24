import React, { Component } from "react";
import Tilt from "react-tilt";
import brainLogo from "../images/brainIcon.png";
export default class Logo extends Component {
  render() {
    let styles = {
      tilt: {
        background:
          "linear-gradient(90deg,rgba(2, 0, 36, 1) 0%,rgba(90, 9, 121, 1) 35%,rgba(0, 132, 255, 1) 100%)"
      }
    };
    return (
      <div>
        <Tilt
          className="Tilt"
          options={{ max: 40 }}
          style={{ height: 250, width: 250 }}
        >
          <div className="Tilt-inner" style={styles.tilt}>
            <img src={brainLogo} alt="Logo" />
          </div>
        </Tilt>
      </div>
    );
  }
}
