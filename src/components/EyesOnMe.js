// Code EyesOnMe Component Here
import React, { Component } from "react";

class EyesOnMe extends React.Component {
  handleKeyUp = (event) => {
    console.log("Entering Password...");
  };

  render() {
    return <div input type="password" onKeyUp={this.handleKeyUp}></div>;
  }
}

export default EyesOnMe;
