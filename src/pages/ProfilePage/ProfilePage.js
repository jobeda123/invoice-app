import React from "react";
import Invoice from "../../components/Invoice/Invoice";
import SideBar from "../../components/SideBar/SideBar";


const ProfilePage = () => {
  return (
    <div className="row d-flex">
      <div className="col-md-2">
        <SideBar />
      </div>
      <div className="col-md-10">
        <Invoice />
      </div>
    </div>
  );
};

export default ProfilePage;
