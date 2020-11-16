import React from "react";
import "./styles.css";

/**
 * Komponen CardInfo
 * komponen pada halaman dashboard
 */
const CardInfo = ({ title, value }) => {
  return (
    <div className="cardinfo">
      <h4 className="cardinfo__title">{title}</h4>
      <h2 className="cardinfo__value">{value}</h2>
    </div>
  );
};

export default React.memo(CardInfo);
