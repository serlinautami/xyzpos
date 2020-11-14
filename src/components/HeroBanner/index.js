import React from "react";
import Button from "../Button";
import { imgHeroBanner } from "../../assets";
import "./styles.css";

const HeroBanner = () => {
  return (
    <div className="herobanner">
      <div className="herobanner__container">
        <div className="herobanner__content">
          <h2 className="herobanner__title">
            Solusi terbaik untuk <br />
            <span className="herobanner__title--highlight">
              mengelola usaha
            </span>
            <br />
            kamu!
          </h2>
          <div className="herobanner__button-wrapper">
            <Button block className="herobanner__button">
              Daftar Sekarang
            </Button>
            <Button block outline className="herobanner__button">
              Pelajari Dulu !
            </Button>
          </div>
        </div>
        <div className="herobanner__content">
          <img
            className="herobanner__image"
            src={imgHeroBanner}
            title="xyzPos"
            alt="xyzPos"
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(HeroBanner);
