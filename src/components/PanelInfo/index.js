import React from "react";
import "./styles.css";
import CardInfo from "../CardInfo";

const dataInfo = [
  { title: "Masa berlaku langganan", value: "15 Juli 2020" },
  { title: "Total Produk", value: "500" },
  { title: "Produk Terjual", value: "1000" },
  { title: "Total Keuntungan", value: "15.000.000" },
];

const PanelInfo = () => {
  return (
    <div className="panelinfo">
      <div className="panelinfo__card-list">
        {dataInfo.map((data, index) => {
          return (
            <div key={index} className="panelinfo__card-item">
              <CardInfo title={data.title} value={data.value} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(PanelInfo);
