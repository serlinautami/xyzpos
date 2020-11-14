import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import "./styles.css";

const Button = ({
  withLink,
  withAnchor,
  children,
  color,
  onClick,
  type,
  outline,
  block,
  className,
}) => {
  const wrapperClass = cx(
    "button",
    {
      "button--anchor": withAnchor,
      "button--link": withLink,
      "button--outline": outline,
      "button--block": block,
      [`button--${color}`]: color,
    },
    className
  );

  return (
    <button type={type} onClick={onClick} className={wrapperClass}>
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.any,
  block: PropTypes.bool,
  outline: PropTypes.bool,
  children: PropTypes.any,
  withLink: PropTypes.bool,
  withAnchor: PropTypes.bool,
  color: PropTypes.oneOf(["primary", "secondary", "transparent"]),
};

Button.defaultProps = {
  className: "",
  block: false,
  withLink: false,
  withAnchor: false,
  outline: false,
  color: "primary",
};

export default React.memo(Button);
