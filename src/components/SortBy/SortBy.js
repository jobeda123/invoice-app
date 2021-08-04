import React from "react";
import { useState } from "react";
import "./SortBy.css";


const SortBy = () => {
  const [activeBtn, setActiveBtn] = useState({
    all: true,
    pending: false,
    outstanding: false,
    overdue: false,
  });

  const sortHandle = (type) => {
    console.log(type);

    const newActive = {
      all: false,
      pending: false,
      outstanding: false,
      overdue: false,
    };
    newActive[type] = true;
    setActiveBtn(newActive);
    console.log(newActive);
  };
  
  return (
    <div className="d-flex justify-content-start sortBtn">
      <p
        style={{ borderBottom: activeBtn.all && "2px solid #A13BAF" }}
        onClick={() => sortHandle("all")}
      >
        All Invoices
      </p>
      <p
        style={{ borderBottom: activeBtn.pending && "2px solid #A13BAF" }}
        onClick={() => sortHandle("pending")}
      >
        Pending Invoices
      </p>
      <p
        style={{ borderBottom: activeBtn.outstanding && "2px solid #A13BAF" }}
        onClick={() => sortHandle("outstanding")}
      >
        Outstanding Invoices
      </p>
      <p
        style={{ borderBottom: activeBtn.overdue && "2px solid #A13BAF" }}
        onClick={() => sortHandle("overdue")}
      >
        Overdue Invoices
      </p>
    </div>
  );
};

export default SortBy;
