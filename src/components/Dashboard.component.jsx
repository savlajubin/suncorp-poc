import React, { Component } from "react";
import UserDetails from "./UserDetails.component";
import Accordion from "../common-components/Accordion.component";
import { connect } from "react-redux";
import { getUserData } from "../actions/userAction";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getUserData();
  }

  render() {
    console.log('dash prop',this.props);
    const { user } = this.props;
    const UserList = user.length ? (
      user.map((u) => {
        return (
          <div className="row m-1 border-bottom border-warning" key={u.id}>
            <div className="col-sm-9  ">
              <div className="">
                <h4 className="font-weight-bold">User Details</h4>
                <UserDetails user={u} />
              </div>

              <div className="">
                <h4 className="font-weight-bold">Product Details</h4>
                {u.product.length ? (
                  u.product.map((p) => (
                    <div key={p.productId}>
                      <Accordion product={p} />
                    </div>
                  ))
                ) : (
                  <div>No Product</div>
                )}
              </div>
            </div>
            <div className="col-sm-3   mb-1 ">
              <Link to={`/profile/${u.id}`} className="btn btn-primary">Edit</Link>
            </div>
          </div>
        );
      })
    ) : (
      <div>No users</div>
    );
    return (
      <div className="container ">
        <h1 className="text-center border-bottom border-dark">Dashboard</h1>
        <div>{UserList}</div>
      </div>
    );
  }
}

const mapStoreToProps = (state) => {
  return {
    user: state.user.user
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getUserData: () => dispatch(getUserData())
  };
};

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(Dashboard);
