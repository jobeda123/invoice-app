import React from "react";
import "./InvoiceTitleAndBtn.css";

const InvoiceTitleAndBtn = () => {
  return (
    <div className="d-flex justify-content-between titleArea">
      <div className="px-4 py-2">
        <h5>Invoices</h5>
      </div>
      <div>
        <button
          className="commonBtn mx-4"
          onClick={() => {
            console.log("New invoice btn is clicked");
          }}
        >
          + New Invoice
        </button>
      </div>
    </div>
  );
};

export default InvoiceTitleAndBtn;
