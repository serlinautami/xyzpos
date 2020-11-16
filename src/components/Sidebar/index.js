import React from "react";
import { NavLink } from "react-router-dom";
import ProfileInfo from "../ProfileInfo";
import cx from "classnames";
import {
  icClose,
  icHome,
  icProduct,
  icReport,
  icSetting,
  icArrowRight,
} from "../../assets";
import "./styles.css";

// sidebar menu data
const sidemenu = [
  { title: "Dashboard", url: "/dashboard", icon: icHome },
  { title: "Produk", url: "/product", icon: icProduct },
  { title: "Laporan", url: "/laporan", icon: icReport },
  { title: "Setting", url: "/setting", icon: icSetting },
];


/**
 * Komponen Sidebar
 * komponen umum yang ada pada Layout Dashboard
 */
const Sidebar = ({ show, onClickToggle }) => {
  const wrapperClass = cx("sidebar", {
    "sidebar--show": show,
  });

  return (
    <div className={wrapperClass}>
      <div className="sidebar__header">
        <a onClick={onClickToggle} href="#" className="sidebar__close">
          <img src={icClose} title="" alt="" />
        </a>
      </div>
      <ProfileInfo />
      <ul className="sidebar__menu-list">
        {sidemenu.map((menu, idx) => {
          return (
            <li key={idx} className="sidebar__menu-item">
              <NavLink
                className="sidebar__menu-link"
                activeClassName="sidebar__menu-link--active"
                to={menu.url}
              >
                <img src={menu.icon} alt="" title="" />
                <span>{menu.title}</span>
                <img
                  className="sidebar__menu-link--arrow"
                  src={icArrowRight}
                  title=""
                  alt=""
                />
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default React.memo(Sidebar);
