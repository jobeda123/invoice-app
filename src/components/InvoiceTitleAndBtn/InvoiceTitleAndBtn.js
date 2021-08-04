import React from "react";
import NewInvoiceDrawer from "../NewInvoiceDrawer/NewInvoiceDrawer";
import "./InvoiceTitleAndBtn.css";

const InvoiceTitleAndBtn = () => {
  return (
    <div className="d-flex justify-content-between titleArea">
      <div>
        <h4>Invoices:</h4>
      </div>
      <div>
        <button
          className="commonBtn mx-4"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasInvoice"
          aria-controls="offcanvasInvoice"
          onClick={() => {
            console.log("New invoice btn is clicked");
          }}
        >
          + New Invoice
        </button>
      </div>
      <NewInvoiceDrawer />
    </div>
  );
};

export default InvoiceTitleAndBtn;
