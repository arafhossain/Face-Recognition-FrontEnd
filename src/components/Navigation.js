import React, { Component } from 'react'

export default class Navigation extends Component {
  render() {
    let styles = {display: 'flex', justifyContent: 'flex-end'};
    return (
      <nav style={styles}>
        <p>Sign out</p>
      </nav>
    )
  }
}

