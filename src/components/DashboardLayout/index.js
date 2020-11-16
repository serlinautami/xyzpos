import React from "react";
import { setProfile } from "../../modules";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import cx from "classnames";
import PropTypes from "prop-types";
import Sidebar from "../Sidebar";
import "./styles.css";

/**
 * Komponen Dashboard Layout
 * komponen untuk container / layout pada tampilan dashboard setelah login
 */
const DashboardLayout = ({ title, children }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  let userData = localStorage.getItem("user_data");

  const [sidebar, setSidebar] = React.useState(true);

  React.useEffect(() => {
    document.body.style = "background-color: #F9F9F9;";

    // ketika tidak ada user data pada localStorage dia
    // redirect ke halaman landing
    if (!userData) {
      history.replace("/");
    } else {
      dispatch(setProfile(JSON.parse(userData)));
    }

    return () => {
      document.body.style = "";
    };
  }, [userData, history, dispatch]);

  // handle untuk toggle pada sidebar di dashboard
  const handleToggleSidebar = () => {
    setSidebar(!sidebar);
  };

  const contentClassname = cx("dashboard-layout__content", {
    "dashboard-layout__content--sidebar-show": sidebar,
  });

  return (
    <div className="dashboard-layout">
      <Sidebar show={sidebar} onClickToggle={handleToggleSidebar} />
      <div className={contentClassname}>
        {!sidebar && (
          <React.Fragment>
            <div
              onClick={handleToggleSidebar}
              className="dashboard-layout__toggle"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div style={{ height: 16 }}></div>
          </React.Fragment>
        )}

        <div className="dashboard-layout__title">{title}</div>
        {children}
      </div>
    </div>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.any,
};

export default React.memo(DashboardLayout);
