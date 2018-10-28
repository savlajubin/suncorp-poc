import React, { Component } from "react";
import Button from "../common-components/Botton.component";

import { connect } from "react-redux";
import { getUserData, getUserDataById, activateEdit, updateUser } from "../actions/userAction";
import InputBox from "../common-components/InputBox.component";

class EditUser extends Component {
    componentDidMount() {
        this.props.getUserDataById(this.props.match.params.id);
    }

    render() {
        console.log('dash prop', this.props);
        const { userData } = this.props;

        return (
            <div>
                <div className="row">
                    <div className="col-12 text-center">
                        <span>User Profile</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-1 col-offset-5">
                        <Button
                            text="Edit"
                            onClick={() => {
                                this.props.activateEdit();
                            }}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        Name:
                    </div>
                    <div className="col-6">
                        <InputBox disabled={this.props.editMode ? false : true} value={userData.name} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        Age:
                    </div>
                    <div className="col-6">
                        <InputBox disabled={this.props.editMode ? false : true} value={userData.age} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        Contact:
                    </div>
                    <div className="col-6">
                        <InputBox disabled={this.props.editMode ? false : true} value={userData.phone} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        Address:
                    </div>
                    <div className="col-6">
                        <div className="col-12">
                            <InputBox disabled={this.props.editMode ? false : true} value={userData.address.street} />
                        </div>
                        <div className="col-12">
                            <InputBox disabled={this.props.editMode ? false : true} value={userData.address.suite} />
                        </div>
                        <div className="col-12">
                            <InputBox disabled={this.props.editMode ? false : true} value={userData.address.city} />
                        </div>
                        <div className="col-12">
                            <InputBox disabled={this.props.editMode ? false : true} value={userData.address.zipcode} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        {
                            this.props.editMode ? <Button
                                text="Update"
                                onClick={() => {
                                    this.props.updateUser();
                                }}
                            /> : ''
                        }
                    </div>
                </div>
            </div>
        );
    }
}

const mapStoreToProps = (state) => {
    return {
        userData: state.user.userData,
        editMode: state.user.editMode
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        getUserData: () => dispatch(getUserData()),
        getUserDataById: (id) => dispatch(getUserDataById(id)),
        activateEdit: () => dispatch(activateEdit()),
        updateUser: () => dispatch(updateUser())
    };
};

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(EditUser);
