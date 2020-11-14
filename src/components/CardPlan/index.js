import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Button from "../Button";
import { icCheckCircle } from "../../assets";
import "./styles.css";

const CardPlan = ({
  isHighlight,
  title,
  price,
  featureList,
  onClickButton,
}) => {
  const wrapperClass = cx("cardplan", {
    "cardplan--highlight": isHighlight,
  });

  return (
    <div className={wrapperClass}>
      {isHighlight && <div className="cardplan__header">Best Seller!</div>}
      <div className="cardplan__price-area">
        <h3 className="cardplan__title">{title}</h3>
        <div className="cardplan__price-wrapper">
          <sup className="cardplan__price--currency">Rp </sup>
          <span className="cardplan__price--nominal">{price}</span>
          <span className="cardplan__price--service">/ bulan</span>
        </div>
      </div>
      <div className="cardplan__feature-area">
        <ul className="cardplan__feature-list">
          {featureList.map((feature, index) => {
            return (
              <li key={index} className="cardplan__feature-item">
                <img src={icCheckCircle} title={feature.title} alt="feature" />
                <span>{feature.title}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="cardplan__button-wrapper">
        <Button block onClick={onClickButton}>
          Aku mau!
        </Button>
      </div>
    </div>
  );
};

CardPlan.propTypes = {
  isHighlight: PropTypes.bool,
  title: PropTypes.string,
  price: PropTypes.string,
  featureList: PropTypes.array,
  onClickButton: PropTypes.func,
};

CardPlan.defaultProps = {
  isHighlight: false,
  title: "",
  price: "",
  featureList: [],
  onClickButton: () => {},
};

export default React.memo(CardPlan);
