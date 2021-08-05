import React from "react";
import { useContext } from "react";
import { InvoiceContext } from "../../App";
import InvoiceTable from "../InvoiceTable/InvoiceTable";
import InvoiceTitleAndBtn from "../InvoiceTitleAndBtn/InvoiceTitleAndBtn";
import SearchField from "../SearchField/SearchField";
import SmallStatusCard from "../SmallStatusCard/SmallStatusCard";
import SortBy from "../SortBy/SortBy";
import "./Invoice.css";


const Invoice = () => {
  const [invoice, setInvoice] = useContext(InvoiceContext);
  return (
    <div>
      <SearchField />
      <SmallStatusCard />
      <InvoiceTitleAndBtn />
      <SortBy />
    </div>
  );
};

export default Invoice;
