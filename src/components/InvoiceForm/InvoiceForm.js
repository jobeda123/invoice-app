import React from "react";
import "./InvoiceForm.css";
import { useForm } from "react-hook-form";
import ItemArea from "../ItemArea/ItemArea";
import ClientArea from "../ClientArea/ClientArea";
import { useState } from "react";
import { useEffect } from "react";

const InvoiceForm = () => {
  const [invoiceDetail, setInvoiceDetail] = useState({});
  const [selectDate, setSelectDate] = useState(new Date());
  const [total, setTotal] = useState(0);

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
    reset,
  } = useForm();

  const handleDate = (date) => {
    let dateMDY = `${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()}`;
    setSelectDate(dateMDY);
    console.log(dateMDY);
  };

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    invoiceDetail[e.target.name] = e.target.value;
  };

  const onSubmit = (data) => {
    invoiceDetail.discount = parseFloat(invoiceDetail.discount);
    invoiceDetail.tax = parseFloat(invoiceDetail.tax);
    invoiceDetail.unitPrice = parseFloat(invoiceDetail.unitPrice);
    invoiceDetail.quantity = parseFloat(invoiceDetail.quantity);
    invoiceDetail.status = "Paid";
    invoiceDetail.dueDate = selectDate;
    invoiceDetail.total = total;
    console.log(invoiceDetail);
    alert("Your Total Amount is: ",total);
    reset();
  };

  
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="invoiceBack my-2">
          <ClientArea handleChange={handleChange} handleDate={handleDate} />

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
