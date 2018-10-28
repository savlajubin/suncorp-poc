import React, { Component } from "react";

class timer extends Component {
  state = {
    curTime: ""
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({
        curTime: new Date().toLocaleString()
      });
    }, 1000);
  }

  render() {
    return <span>{this.state.curTime}</span>;
  }
}

export default timer;
