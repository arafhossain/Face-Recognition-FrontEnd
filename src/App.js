import React, { Component } from "react";
import Particles from "react-particles-js";
import Axios from "axios";
import Logo from "./components/Logo";
import Rank from "./components/Rank";
import { LinkForm } from "./components/LinkForm";
import { Navigation } from "./components/Navigation";
import { FaceRecognition } from "./components/FaceRecognition";
import { SignIn } from "./components/SignIn";
import { Register } from "./components/Register";

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

let initialState = {
  input: "",
  imageLink: "",
  box: {},
  route: "signin",
  signedIn: false,
  user: {
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: new Date()
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      imageLink: "",
      box: {},
      route: "signin",
      signedIn: false,
      user: {
        id: "",
        name: "",
        email: "",
        entries: 0,
        joined: new Date()
      }
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.getBoxLocation = this.getBoxLocation.bind(this);
    this.onRouteChange = this.onRouteChange.bind(this);
    this.loadUser = this.loadUser.bind(this);
  }

  loadUser = ({ data }) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    });
  };

  getBoxLocation = response => {
    let rawlocation = response.data.outputs[0].data.regions[0].region_info.bounding_box;
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
      let url = "https://fast-temple-38246.herokuapp.com/imageurl";
      let params = { imageLink: this.state.imageLink };
      Axios.post(url, params)
        .then(response => {
          if (response) {
            let url = "https://fast-temple-38246.herokuapp.com/image";
            let params = { id: this.state.user.id };
            Axios.put(url, params).then(count => {
              this.setState(
                Object.assign(this.state.user, { entries: count.data })
              );
            })
          this.getBoxLocation(response);
          }
        })
        .catch(err => console.log(err));
    });
  };

  onRouteChange = newRoute => {
    if (newRoute === "signout") {
      this.setState(initialState);
    } else if (newRoute === "home") {
      this.setState({ signedIn: true });
    }
    this.setState({ route: newRoute });
  };
  render() {
    let { box, imageLink, signedIn, route } = this.state;
    return (
      <div className="App">
        <Particles params={particlesConfig} className="particles" />
        <div className="navbar">
        <Logo />
        <Navigation signedIn={signedIn} onRouteChange={this.onRouteChange} />
        </div>
        {route === "home" ? (
          <>
            <Rank
              name={this.state.user.name}
              entries={this.state.user.entries}
            />
            <LinkForm
              onInputChange={this.onInputChange}
              onButtonClick={this.onButtonClick}
            />
            <FaceRecognition imageLink={imageLink} box={box} />
          </>
        ) : route === "signin" ? (
          <SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
        ) : (
          <Register
            onRouteChange={this.onRouteChange}
            loadUser={this.loadUser}
          />
        )}
      </div>
    );
  }
}

export default App;
