import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { set } from "react-hook-form";
import { InvoiceContext } from "../../App";
import "./SmallStatusCard.css";

const cardDetail = [
  { type: "Total Invoice", value: 0, color: "Blue" },
  { type: "Paid Invoice", value: 0, color: "green" },
  { type: "Outstanding Invoice", value: 0, color: "orange" },
  { type: "Overdue Invoice", value: 0, color: "red" },
];

const SmallStatusCard = () => {
  const [invoice, setInvoice] = useContext(InvoiceContext);
  const [value, setValue] = useState([]);

  
  useEffect(() => {
    const total = invoice.length;
    const paid = invoice.filter((type) => type.status === "Paid");
    const due = invoice.filter((type) => type.status === "OverDue");
    const out = invoice.filter((type) => type.status === "Outstanding");
    const newD = [total.value, paid, due, out];
    setValue(newD);
    console.log(newD);
  }, []);

  return (
    <div className="row cardStyle">
      {cardDetail.map((item, index) => (
        <div style={{ color: `${item.color}` }} className="smallCard col">
          {item.type} : {item.value}
        </div>
      ))}
    </div>
  );
};

export default SmallStatusCard;
