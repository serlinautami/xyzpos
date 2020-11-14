import React from "react";
import { useDispatch } from "react-redux";
import { setModalRegistration } from "../../modules";
import CardPlan from "../CardPlan";
import DialogRegister from "../DialogRegister";
import "./styles.css";

const plans = [
  {
    title: "Basic",
    price: "45.000",
    highlight: false,
    feature: [
      { title: "Kelola stok produk dengan mudah" },
      { title: "Laporan penjualan lengkap" },
      { title: "Jual produk digital" },
    ],
  },
  {
    title: "Premium",
    price: "50.000",
    highlight: true,
    feature: [
      { title: "Semua fitur pada paket Basic" },
      { title: "Dukungan printer struk" },
      { title: "Live support 24 jam" },
    ],
  },
  {
    title: "Super POS!",
    price: "70.000",
    highlight: false,
    feature: [
      { title: "Semua fitur pada paket Premium" },
      { title: "Laporan penjualan lengkap" },
      { title: "Jual produk digital" },
    ],
  },
];

const Subscription = () => {
  const dispatch = useDispatch();

  const handleClickPlan = () => {
    dispatch(setModalRegistration(true));
  };
  return (
    <React.Fragment>
      <div id="berlangganan" className="subscription">
        <div className="subscription__container">
          <h2 className="subscription__title">
            Daftar sekarang dan nikmati fiturnya!
          </h2>
          <div className="subscription__price-list">
            {plans.map((plan, index) => {
              return (
                <div key={index} className="subscription__price-item">
                  <CardPlan
                    title={plan.title}
                    price={plan.price}
                    featureList={plan.feature}
                    isHighlight={plan.highlight}
                    onClickButton={handleClickPlan}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default React.memo(Subscription);
