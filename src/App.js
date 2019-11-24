import React, { Component } from "react";
import Particles from "react-particles-js";
import Clarifai from "clarifai";

import Navigation from "./components/Navigation";
import Logo from "./components/Logo";
import Rank from "./components/Rank";
import { LinkForm } from "./components/LinkForm";
import FaceRecognition from "./components/FaceRecognition";

import "./App.css";

let particlesConfig = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

const app = new Clarifai.App({
  apiKey: "ef4fe545a8d04777ab6ce3f61ac45a12"
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { input: "", imageLink: "", box: {} };
    this.onInputChange = this.onInputChange.bind(this);
    this.getBoxLocation = this.getBoxLocation.bind(this);
  }

  getBoxLocation = data => {
    let rawlocation = data.outputs[0].data.regions[0].region_info.bounding_box;
    let image = document.getElementById("image");
    let imgWidth = Number(image.width);
    let imgHeight = Number(image.height);
    let boxLocation = {
      leftCol: rawlocation.left_col * imgWidth,
      topRow: rawlocation.top_row * imgHeight,
      rightCol: imgWidth - rawlocation.right_col * imgWidth,
      bottomRow: imgHeight - rawlocation.bottom_row * imgHeight
    };
    this.setState({
      box: boxLocation
    });
  };

  onInputChange = event => {
    this.setState({ input: event.target.value });
  };

  onButtonClick = () => {
    this.setState({ imageLink: this.state.input }, function() {
      app.models
        .predict(Clarifai.FACE_DETECT_MODEL, `${this.state.imageLink}`)
        .then(
          //https://image.shutterstock.com/image-photo/beauty-woman-face-portrait-beautiful-260nw-324099731.jpg
          response => {
            this.getBoxLocation(response);
          }
        )
        .catch(err => console.log(err));
    });
  };
  render() {
    return (
      <div className="App">
        <Particles params={particlesConfig} className="particles" />
        <Navigation />
        <Logo />
        <Rank />
        <LinkForm
          onInputChange={this.onInputChange}
          onButtonClick={this.onButtonClick}
        />
        <FaceRecognition
          imageLink={this.state.imageLink}
          box={this.state.box}
        />
      </div>
    );
  }
}

export default App;
