import React from "react";
import "./styles.css";


/**
 * Komponen bagian Footer halaman depan
 */
const Footer = () => {
  return (
    <div className="footer">
      <span>© PT XYZ Indonesia 2020</span>
    </div>
  );
};

export default React.memo(Footer);
