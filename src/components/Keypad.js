// Code Keypad Component Here
import React, { Component } from "react";

class Keypad extends React.Component {
  handleThePassword = () => {
    console.log("Entering Password...");
  };

  render() {
    return <div> input type="password" onKeyUp={this.handleThePassword}/></div>;
  }
}

export default Keypad;
