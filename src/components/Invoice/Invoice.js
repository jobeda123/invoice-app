import React from "react";
import InvoiceTitleAndBtn from "../InvoiceTitleAndBtn/InvoiceTitleAndBtn";
import SearchField from "../SearchField/SearchField";
import SmallStatusCard from "../SmallStatusCard/SmallStatusCard";
import SortBy from "../SortBy/SortBy";
import "./Invoice.css";

const Invoice = () => {
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
