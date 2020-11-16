import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { icClose } from "../../assets";
import "./styles.css";

/**
 * Komponan Modal
 * komponen yang reusable untuk menampilkan modal aplikasi
 */
const Modal = ({ onModalClose, children, show, onClose }) => {
  const modalClass = cx("modal", {
    "modal--visible": show,
  });

  return (
    <React.Fragment>
      <div className={modalClass}>
        <div className="modal__content">
          <div onClick={onClose} className="modal__close">
            <img src={icClose} title="" alt="" />
          </div>
          <div className="modal__body">{children}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

Modal.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.any,
  onModalClose: PropTypes.func,
  onClose: PropTypes.func,
};
Modal.defaultProps = {
  show: false,
  onClose: () => {},
  onModalClose: () => {},
};

export default React.memo(Modal);
