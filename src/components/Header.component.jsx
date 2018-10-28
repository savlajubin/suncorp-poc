import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import {
    Navbar,
    Nav,
    NavItem,
    Container
} from "reactstrap";

import logo from "../assets/images/One-suncorp-logo.svg";

import Button from "../common-components/Botton.component";
import { logout } from "../actions/authAction";
import Timer from "../common-components/Timer.component";
import Logout from "../common-components/Logout.component"

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true,
        };
    }

    render() {
        return (
            // add or remove classes depending if we are on full-screen-maps page or not
            <Navbar>
                <Container fluid>
                    <Nav navbar>
                        <NavItem>
                            <Link to="/" className="nav-link logo-link">
                                <img src={logo} alt="Suncorp logo" />
                            </Link>
                        </NavItem>
                        <NavItem className={(this.props.loggedin.loggedin)?"show":"hide"}>
                            <Logout />
                        </NavItem>
                        <NavItem>
                            <Timer />
                        </NavItem>
                    </Nav>
                </Container>
            </Navbar>
        );
    }
}

const mapStoreToProps = (state) => {
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
)(Header);
