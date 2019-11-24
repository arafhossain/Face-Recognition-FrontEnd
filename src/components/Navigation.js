import React, { Component } from "react";

export default class Navigation extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let styles = { signedOut: { display: "flex", justifyContent: "flex-end" } };
    return (
      <nav style={styles.signedOut}>
        <p
          onClick={() => this.props.onRouteChange("signin")}
          className="f3 link dim black underline pa3 pointer"
        >
          Sign out
        </p>
      </nav>
    );
  }
}
