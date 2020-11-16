import React from "react";
import cx from "classnames";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import Button from "../Button";
import "./styles.css";

const menus = [
  { title: "Fitur", url: "#" },
  { title: "Berlangganan", url: "#berlangganan" },
];

/**
 * Komponen Navbar
 * komponen Navbar adalah komponen yang berada paling atas di aplikasi
 */
const Navbar = () => {
  const [changeNavbar, setChangeNavbar] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState(false);

  // useScrollPosition untuk mendapatkan window position
  // yang akan menghandle navbar berubah warna ketika discroll
  useScrollPosition(
    ({ prevPos, currPos }) => {
      console.log(currPos, prevPos);
      if (currPos.y <= -100) {
        setChangeNavbar(true);
      } else {
        setChangeNavbar(false);
      }
    },
    [changeNavbar]
  );

  const wrapperClass = cx("navbar", {
    "navbar--scroll": changeNavbar,
  });

  const buttonClass = cx("navbar__button-signin", {
    "navbar__button-signin--scroll": changeNavbar,
  });

  const menuClass = cx("navbar__menu-list", {
    "navbar__menu-list--show": openMenu,
  });

  return (
    <nav className={wrapperClass}>
      <div className="navbar__container">
        <div className="navbar__logo">
          <h1 className="navbar__logo-title">
            <a href="/">
              <span>xyz</span>
              <span>POS</span>
            </a>
          </h1>
        </div>
        <ul className={menuClass}>
          <div
            onClick={() => setOpenMenu(!openMenu)}
            className="navbar__burger"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          {menus.map((menu, index) => {
            return (
              <li key={index} className="navbar__menu-item">
                <a href={menu.url} className="navbar__menu-link">
                  {menu.title}
                </a>
              </li>
            );
          })}
          <li className="navbar__menu-item">
            <Button outline className={buttonClass}>
              Masuk
            </Button>
          </li>
        </ul>
        <div onClick={() => setOpenMenu(!openMenu)} className="navbar__burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default React.memo(Navbar);
