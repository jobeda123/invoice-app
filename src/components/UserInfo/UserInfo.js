import React from "react";
import { Table } from "react-bootstrap";
import "./UserInfo.css";

const UserInfo = () => {
  const user = {
    name: "Jobeda Nur",
    email: "jobeda@gmail.com",
    address: "Block-D, road no-5, Dhanmondi",
    gender: "female",
    birthDate: "9th Dec, 1997",
  };
  return (
    <div className="userArea">
      <div className="userTable">
        <Table>
          <tbody>
            <tr>
              <td>Name: </td>
              <td>{user.name}</td>
            </tr>
            <tr>
              <td>E-mail: </td>
              <td>{user.email}</td>
            </tr>
            <tr>
              <td>Gender: </td>
              <td>{user.gender}</td>
            </tr>
            <tr>
              <td>Birth of Date: </td>
              <td>{user.birthDate}</td>
            </tr>
            <tr>
              <td>Address: </td>
              <td>{user.address}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default UserInfo;
