import React from "react";

const UserDetails = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>Name:</td>
          <td>{props.user.name}</td>
        </tr>
        <tr>
          <td>Age:</td>
          <td>{props.user.age}</td>
        </tr>
        <tr>
          <td>Contact:</td>
          <td>{props.user.phone}</td>
        </tr>
        <tr>
          <td>Address:</td>
          <td>
            <div>
              {props.user.address.street},{props.user.address.suite},
              {props.user.address.city},{props.user.address.zipcode}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default UserDetails;
