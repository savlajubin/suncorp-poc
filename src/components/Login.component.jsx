import React, { Component } from "react";
import { connect } from "react-redux";

import Inputbox from "../common-components/InputBox.component";
import Button from "../common-components/Botton.component";

import { login } from "../actions/authAction";


class Login extends Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  state = {
    username: "",
    password: ""
  }

  componentDidUpdate() {
    if (this.props.loggedin && this.props.loggedin.loggedin) {
      this.props.history.push('/dashboard');
    }
  }

  handleChange(e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
    console.log("input box login", e.target.value, e.target.name)
    return;
  }

  render() {
    return (
      <div className="container">
        <div className="wrapper">
          <div className="col-md-6 offset-md-3 border align-div-center">
            <h2 htmlFor="Sign In">
              Login
          </h2>
            <form>
              <div className="form-group">
                <Inputbox
                  labelText="User Name"
                  placeHolderText="Enter user name"
                  type="text"
                  name="username"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <Inputbox
                  labelText="Password"
                  placeHolderText="Enter password"
                  type="password"
                  name="password"
                  onChange={this.handleChange}
                />
              </div>
              <div className="d-flex justify-content-center">
                <Button text="Submit" className="btn btn-primary" onClick={() => { this.props.login(this.state) }} />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}


const mapStoreToProps = (state) => {
  console.log('lllsss', state)
  return {
    loggedin: state.login
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (formData) => dispatch(login(formData))
  };
};

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(Login);
