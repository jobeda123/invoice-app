import React from "react";
import Profile from "../../components/Profile/Profile";
import SideBar from "../../components/SideBar/SideBar";


const ProfilePage = () => {
  return (
    <div className="row d-flex">
      <div className="col-md-2">
        <SideBar />
      </div>
      <div className="col-md-10">
          <Profile />
      </div>
    </div>
  );
};

export default ProfilePage;
