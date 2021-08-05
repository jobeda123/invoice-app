import React from "react";
import InvoiceForm from "../InvoiceForm/InvoiceForm";
import "./NewInvoiceDrawer.css";


const NewInvoiceDrawer = () => {
  return (
    <div
      className="offcanvas offcanvas-end drawer"
      tabIndex="-1"
      id="offcanvasInvoice"
      aria-labelledby="offcanvasInvoiceLabel"
    >
      <div class="offcanvas-header drawerHeader">
        <h5 class="offcanvas-title" id="offcanvasInvoiceLabel">
          Create New Invoice
        </h5>

        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>

      <div class="offcanvas-body drawerBody">
        <InvoiceForm />
      </div>
    </div>
  );
};

export default NewInvoiceDrawer;
