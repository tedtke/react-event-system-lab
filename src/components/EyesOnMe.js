// Code EyesOnMe Component Here
import React, { Component } from "react";

class EyesOnMe extends React.Component {
  handleFocusing = () => {
    console.log("Good!");
  };

  handleBluring = () => {
    console.log("Hey Eyes On Me!");
  };

  render() {
    return (
      <div>
        <button onFocus={this.handleFocusing} onBlur={this.handleBluring} />
      </div>
    );
  }
}

export default EyesOnMe;
