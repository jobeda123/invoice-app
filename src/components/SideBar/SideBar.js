import React from "react";
import "./SideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIdBadge,
  faFileInvoice,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";


const SideBar = () => {
  return (
    <div>
      <div className="backArea">
        <div className="logoArea">
          <h3>Quoality</h3>
        </div>

        <div className="row d-flex linkArea">
          <a href="/profilePage">
            <span className="icon">
              <FontAwesomeIcon icon={faIdBadge} />
            </span>
            Profile
          </a>

          <a href="/invoicePage">
            <span className="icon">
              <FontAwesomeIcon icon={faFileInvoice} />
            </span>
            Invoice
          </a>

          <a href="/logout">
            <span className="icon">
              <FontAwesomeIcon icon={faSignOutAlt} />
            </span>
            Logout
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
