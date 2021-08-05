import React from "react";
import { useState } from "react";
import "./InvoiceTable.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { InvoiceContext } from "../../App";


const InvoiceTable = ({invoiceData}) => {
  const [invoice, setInvoice] = useContext(InvoiceContext);
  const [optionValue, setOptionValue] = useState();
  const [statusStyle, setStatusStyle] = useState({
    backColor: "",
    color: "",
  });


  const handleOption = (e) => {
    e.preventDefault();
    setOptionValue(e.target.value);
    console.log(e.target.value);
    if (e.target.value === "Paid") {
      const newStyle = {
        backColor: "lightgreen",
        color: "green",
      };
      setStatusStyle(newStyle);
    } else if (e.target.value === "Outstanding") {
      const newStyle = {
        backColor: "rgb(247, 247, 93)",
        color: "orange",
      };
      setStatusStyle(newStyle);
    } else {
      const newStyle = {
        backColor: "rgb(243, 142, 153)",
        color: "red",
      };
      setStatusStyle(newStyle);
    }
  };

  const handleEdit = (e) => {
    console.log("edit");
  };

  const handleRemove = (data) => {
    console.log("remove",data);
    const newInvoice = invoice.filter((pd) => pd.item !== data.item);
    setInvoice(newInvoice);
  };

  return (
    <div className="row container">
      <table className="invoiceTable col-md-12 col-sm-6">
        <thead className="headRow">
          <tr>
            <th>No.</th>
            <th>Item</th>
            <th>Due Date</th>
            <th>Client</th>
            <th>Amount ($)</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody className="dataRow">
          {invoiceData.map((data,index) => (
            <>
              <tr>
                <td>
                  <a href="/home">#{index}</a>
                </td>
                <td>{data.item}</td>
                <td>{data.dueDate}</td>
                <td>{data.clientName}</td>
                <td>{data.total}</td>

                <td id="status">
                  <div>
                    <select
                      style={{
                        background: `${statusStyle.backColor}`,
                        color: `${statusStyle.color}`,
                        fontWeight: "bold",
                      }}
                      value={data.status}
                      onChange={(e) => handleOption(e)}
                    >
                      <option value="Paid">Paid</option>
                      <option value="Outstanding">Outstanding</option>
                      <option value="Overdue">Overdue</option>
                    </select>
                  </div>
                </td>

                <td className="action">
                  <div>
                    <span
                      className="icon"
                      style={{ color: "green" }}
                      onClick={() => handleEdit(data)}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </span>

                    <span
                      className="icon"
                      style={{ color: "red" }}
                      onClick={() => handleRemove(data)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </span>
                  </div>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvoiceTable;
