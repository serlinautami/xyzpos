import React from "react";
import Button from "../Button";
import "./styles.css";

const dataTable = [
  {
    jam: "09:21",
    customer: "Budi Cahyadi",
    barang: "Kipas Angin",
    hargabarang: "Rp 100.000",
    quantity: 1,
    total: "Rp 100.000",
  },
  {
    jam: "13:50",
    customer: "Ahmad Santoso",
    barang: "Sapu Ijuk",
    hargabarang: "Rp 10.000",
    quantity: 2,
    total: "Rp 20.000",
  },
  {
    jam: "15:00",
    customer: "Yulia",
    barang: "Rinso",
    hargabarang: "Rp 35.000",
    quantity: 4,
    total: "Rp 140.000",
  },
  {
    jam: "16:00",
    customer: "Evelyn",
    barang: "Molto",
    hargabarang: "Rp 35.000",
    quantity: 4,
    total: "Rp 140.000",
  },
  {
    jam: "18:30",
    customer: "Tara",
    barang: "Telur Ayam Kampung",
    hargabarang: "Rp 75.000",
    quantity: 1,
    total: "Rp 75.000",
  },
  {
    jam: "18:30",
    customer: "Tara",
    barang: "Telur Ayam Kampung",
    hargabarang: "Rp 75.000",
    quantity: 1,
    total: "Rp 75.000",
  },
  {
    jam: "18:30",
    customer: "Tara",
    barang: "Telur Ayam Kampung",
    hargabarang: "Rp 75.000",
    quantity: 1,
    total: "Rp 75.000",
  },
  {
    jam: "18:30",
    customer: "Tara",
    barang: "Telur Ayam Kampung",
    hargabarang: "Rp 75.000",
    quantity: 1,
    total: "Rp 75.000",
  },
];

const CardTable = () => {
  return (
    <div className="card-table">
      <div className="card-table__header">
        <h3 className="card-table__title">Penjualan Hari ini</h3>
        <span className="card-table__subtitle">Kamis, 13 Agustus 2020</span>
      </div>
      <div className="card-table__body">
        <table>
          <thead>
            <tr>
              <td>Jam</td>
              <td>Customer</td>
              <td>Barang</td>
              <td>Harga Barang</td>
              <td>Qty</td>
              <td>Total</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {dataTable.map((data, i) => {
              return (
                <tr key={i}>
                  <td>{data.jam}</td>
                  <td>{data.customer}</td>
                  <td>{data.barang}</td>
                  <td style={{ textAlign: "right" }}>{data.hargabarang}</td>
                  <td style={{ textAlign: "center" }}>{data.quantity}</td>
                  <td style={{ textAlign: "right" }}>{data.total}</td>
                  <td style={{ textAlign: "center" }}>
                    <Button>Lihat Detail</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CardTable;
