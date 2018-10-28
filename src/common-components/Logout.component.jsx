import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Button from "../common-components/Botton.component";

import { logout } from "../actions/authAction";

import "../assets/css/logout-modal.css";


class Logout extends React.Component {
    constructor(props) {
        super(props);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            showLogoutModal: false
        };
    }

    componentDidUpdate() {
        console.log('logout', this.props)
        if (this.props.loggedin && this.props.loggedin.loggedin === false) {
            if (this.state.showLogoutModal) {
                this.setState({ showLogoutModal: false });
            }
            this.props.history.push('/login');
        }
    }

    handleClose() {
        this.setState({ showLogoutModal: false });
    }

    handleShow() {
        this.setState({ showLogoutModal: true });
    }

    render() {

        return (
            <div>
                <Button text="Logout" onClick={this.handleShow} />
                <div className={`poc-modal-layover ${this.state.showLogoutModal ? 'show' : 'hide'}`}>
                    <div className="poc-modal-body">
                        <h4>Are you sure you Want to end this Session?</h4>
                        <div className="row">
                            <div className="col-6">
                                <Button text="Yes" className="btn btn-primary" onClick={this.props.logout} />
                            </div>
                            <div className="col-6">
                                <Button text="No" className="btn btn-secondary" onClick={this.handleClose} />
                            </div>
                        </div>
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
        logout: () => dispatch(logout())
    };
};

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(withRouter(Logout));