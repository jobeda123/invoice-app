import React from "react";
import Invoice from "../Invoice/Invoice";
import SideBar from "../SideBar/SideBar";

const Home = () => {
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

export default Home;
