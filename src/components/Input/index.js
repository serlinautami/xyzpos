import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import "./styles.css";

/**
 * Komponen Input adalah komponen umum yang reusable
 * @param {*} param0 
 */
const Input = ({ icon, type, onChange, className, inputClass, ...props }) => {
  const wrapperClass = cx("input", className, {
    "input--with-icon": icon,
  });
  const fieldClass = cx("input__field", inputClass);

  return (
    <div className={wrapperClass}>
      {icon && (
        <div className="input__icon">
          <img src={icon} title="" alt="" />
        </div>
      )}
      <input
        className={fieldClass}
        type={type}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

Input.propTypes = {
  icon: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.any,
  inputClass: PropTypes.any,
};
Input.defaultProps = {
  type: "text",
  icon: "",
  onChange: () => {},
};

export default React.memo(Input);
