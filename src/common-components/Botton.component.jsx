import React, { Component } from "react";

class button extends Component {
  state = {};
  render() {
    return (
      <div className="col-lg-1">
        <button
          type="button"
          className="btn btn-outline-warning"
          onClick={this.props.onClick}
        >
          {this.props.text}
        </button>
      </div>
    );
  }
}

export default button;
