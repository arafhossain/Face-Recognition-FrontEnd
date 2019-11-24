import React, { Component } from "react";
import '../linkForm.css'

export default class LinkForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let {onInputChange, onButtonClick} = this.props;
    return (
      <div>
        <p>Face detector in pictures</p>
        <div className="centered">
          <div className="form">
            <input type="text" className="f4 center" onChange={onInputChange}/>
            <button onClick={onButtonClick}>Detect</button>
          </div>
        </div>
      </div>
    );
  }
}
