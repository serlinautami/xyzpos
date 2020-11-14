import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import "./sytles.css";

const Checkbox = ({
  className,
  htmlFor,
  id,
  wrapperProps,
  labelProps,
  children,
  ...props
}) => {
  const wrapperClass = cx("checkbox", className);
  return (
    <div className={wrapperClass} {...wrapperProps}>
      <input id={id} type="checkbox" className="checkbox__input" {...props} />
      <label htmlFor={htmlFor} className="checkbox__label" {...labelProps}>
        {children}
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  className: PropTypes.any,
  htmlFor: PropTypes.string,
  id: PropTypes.string,
  wrapperProps: PropTypes.any,
  labelProps: PropTypes.any,
  children: PropTypes.any,
};
Checkbox.defaultProps = {};

export default React.memo(Checkbox);
