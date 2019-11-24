import React, { Component } from "react";

export default class Navigation extends Component {
  render() {
    let styles = { signedOut: { display: "flex", justifyContent: "flex-end" } };
    return (
      <nav style={styles.signedOut}>
        <p className='f3 link dim black underline pa3 pointer'>Sign out</p>
      </nav>
    );
  }
}
