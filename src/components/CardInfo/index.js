import React from "react";
import "./styles.css";

const CardInfo = ({ title, value }) => {
  return (
    <div className="cardinfo">
      <h4 className="cardinfo__title">{title}</h4>
      <h2 className="cardinfo__value">{value}</h2>
    </div>
  );
};

export default React.memo(CardInfo);
