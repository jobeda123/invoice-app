import React from "react";
import InvoiceTable from "../InvoiceTable/InvoiceTable";
import InvoiceTitleAndBtn from "../InvoiceTitleAndBtn/InvoiceTitleAndBtn";
import SearchField from "../SearchField/SearchField";
import SmallStatusCard from "../SmallStatusCard/SmallStatusCard";
import SortBy from "../SortBy/SortBy";
import UserInfo from "../UserInfo/UserInfo";


const Profile = () => {
  return (
    <div>
      <SearchField />
      <UserInfo />
    </div>
  );
};

export default Profile;
