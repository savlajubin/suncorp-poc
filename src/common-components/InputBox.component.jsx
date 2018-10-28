import React, { Component } from "react";

class InputBox extends Component {
  state = {
    model: ""
  };

  // onChange = (e) => {
  //   this.setState({
  //     model: e.target.value
  //   });
  //   // console.log("input box", e.target.value);
  //   this.props.onChange(this.state.model);
  // };

  render() {
    return (
      <div>
        <span>
          <label htmlFor={this.props.labelText}>{this.props.labelText}</label>
        </span>
        <span className="col-lg-3">
          <input
            type={this.props.type ? this.props.type : "text"}
            placeholder={
              this.props.placeHolderText ? this.props.placeHolderText : ""
            }
            className="form-control"
            onChange={this.props.onChange}
            name={this.props.name}
            value={this.props.value}
            disabled={this.props.disabled}
          />
        </span>
      </div>
    );
  }
}

export default InputBox;
