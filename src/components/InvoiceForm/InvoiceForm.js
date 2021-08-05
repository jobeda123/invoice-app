import React from "react";
import "./InvoiceForm.css";
import { useForm } from "react-hook-form";
import ItemArea from "../ItemArea/ItemArea";
import ClientArea from "../ClientArea/ClientArea";
import { useState } from "react";
import { useEffect } from "react";
import { HandleAddInvoiceContext, InvoiceContext } from "./../../App";
import { useContext } from "react";

const InvoiceForm = () => {
  const [invoiceDetail, setInvoiceDetail] = useState({});
  const [selectDate, setSelectDate] = useState(new Date());
  const [total, setTotal] = useState(0);
  const [invoice, setInvoice] = useContext(InvoiceContext);


  useEffect(() => {
    let discount = parseFloat(invoiceDetail.discount) / 100;
    let tax = parseFloat(invoiceDetail.tax) / 100;
    let price =
      parseFloat(invoiceDetail.unitPrice) *
      parseFloat(invoiceDetail.quantity) *
      (discount + tax);
    setTotal(price.toFixed(2));
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleDate = (date) => {
    let dateMDY = `${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()}`;
    setSelectDate(dateMDY);
  };

  const handleChange = (e) => {
    invoiceDetail[e.target.name] = e.target.value;
  };

  const onSubmit = (data) => {
    const newInvoice = [
      ...invoice,
      {
        id: 3 + 1,
        clientName: invoiceDetail.name,
        item: invoiceDetail.item,
        description: invoiceDetail.description,
        discount: parseFloat(invoiceDetail.discount),
        tax: parseFloat(invoiceDetail.tax),
        unitPrice: parseFloat(invoiceDetail.unitPrice),
        quantity: parseFloat(invoiceDetail.quantity),
        status: "Paid",
        dueDate: selectDate,
        total: total,
      },
    ];

    setInvoice(newInvoice);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="invoiceBack my-2">
          <ClientArea handleChange={handleChange} handleDate={handleDate}/>

          <ItemArea handleChange={handleChange} />
        </div>

        <div className="mt-5">
          <input
            type="submit"
            className="commonBtn my-2 mx-0"
            style={{ border: "1px solid black" }}
          />
        </div>
      </form>
    </div>
  );
};

export default InvoiceForm;
