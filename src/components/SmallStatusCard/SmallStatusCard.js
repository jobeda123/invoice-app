import React from "react";
import "./SmallStatusCard.css";

const cardDetail = [
  { type: "Total Invoice", value: 0, color: "Blue" },
  { type: "Paid Invoice", value: 0, color: "green" },
  { type: "Outstanding Invoice", value: 0, color: "orange" },
  { type: "Overdue Invoice", value: 0, color: "red" },
];

const SmallStatusCard = () => {
  return (
    <div className="row cardStyle">
      {cardDetail.map((item) => (
        <div style={{ color: `${item.color}` }} className="smallCard col">
          {item.type} : {item.value}
        </div>
      ))}
    </div>
  );
};

export default SmallStatusCard;
