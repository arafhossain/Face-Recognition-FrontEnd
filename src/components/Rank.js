import React, { Component } from 'react'

export default class Rank extends Component {
  render(){
    return (
      <div>
        <div className="white f2">
          {this.props.name}, your total entries count is:
          </div>
          <div className="white f1">
          {this.props.entries}
          </div>
        </div>
    )
  }
}