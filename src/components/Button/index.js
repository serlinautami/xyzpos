import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import "./styles.css";


/**
 * Komponen Button
 * komponen umum untuk button
 */
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
  url,
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

  if (withAnchor) {
    return (
      <a href={url} type={type} onClick={onClick} className={wrapperClass}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={wrapperClass}>
      {children}
    </button>
  );
};

Button.propTypes = {
  url: PropTypes.string,
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
  url: "",
  block: false,
  withLink: false,
  withAnchor: false,
  outline: false,
  color: "primary",
};

export default React.memo(Button);
