import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { InvoiceContext } from "../../App";
import InvoiceTable from "../InvoiceTable/InvoiceTable";
import "./SortBy.css";

const SortBy = () => {
  const [invoice, setInvoice] = useContext(InvoiceContext);
  const [sortData, setSortData] = useState(invoice);
  const [activeBtn, setActiveBtn] = useState({
    all: true,
    paid: false,
    outstanding: false,
    overdue: false,
  });

  const sortHandle = (type) => {
    const newActive = {
      all: false,
      paid: false,
      outstanding: false,
      overdue: false,
    };
    newActive[type] = true;
    setActiveBtn(newActive);

    if (type === "all") {
      setSortData(invoice);
    } else if (type === "paid") {
      const paid = invoice.filter((data) => data.status === "Paid");
      setSortData(paid);
    } else if (type === "outstanding") {
      const out = invoice.filter((data) => data.status === "Outstanding");
      setSortData(out);
    } else {
      const due = invoice.filter((data) => data.status === "Overdue");
      setSortData(due);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-start sortBtn">
        <p
          style={{ borderBottom: activeBtn.all && "2px solid #A13BAF" }}
          onClick={() => sortHandle("all")}
        >
          All Invoices
        </p>
        <p
          style={{ borderBottom: activeBtn.paid && "2px solid #A13BAF" }}
          onClick={() => sortHandle("paid")}
        >
          Paid Invoices
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
      <InvoiceTable invoiceData={sortData} />
    </>
  );
};

export default SortBy;
