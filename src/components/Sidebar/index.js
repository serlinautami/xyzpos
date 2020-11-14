import React from "react";
import { NavLink } from "react-router-dom";
import ProfileInfo from "../ProfileInfo";
import {
  icClose,
  icHome,
  icProduct,
  icReport,
  icSetting,
  icArrowRight,
} from "../../assets";
import "./styles.css";

const sidemenu = [
  { title: "Dashboard", url: "/dashboard", icon: icHome },
  { title: "Produk", url: "/product", icon: icProduct },
  { title: "Laporan", url: "/laporan", icon: icReport },
  { title: "Setting", url: "/setting", icon: icSetting },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <a href="#" className="close">
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
