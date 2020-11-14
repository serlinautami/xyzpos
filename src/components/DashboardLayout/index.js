import React from "react";
import { setProfile } from "../../modules";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import Sidebar from "../Sidebar";
import "./styles.css";

const DashboardLayout = ({ title, children }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  let userData = localStorage.getItem("user_data");

  React.useEffect(() => {
    document.body.style = "background-color: #F9F9F9;";

    if (!userData) {
      history.replace("/");
    } else {
      dispatch(setProfile(JSON.parse(userData)));
    }

    return () => {
      document.body.style = "";
    };
  }, [userData]);

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-layout__content">
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
