import React from "react";
import { clearProfile } from "../../modules";
import { useSelector, useDispatch } from "react-redux";
import { icAccount } from "../../assets";
import "./styles.css";

/**
 * Komponen Profile Info
 * komponen yang ada pada sidebar untuk 
 * menampikan Informasu user profile
 * yang login
 */
const ProfileInfo = () => {
  const profile = useSelector((store) => store.profile);
  const dispatch = useDispatch();
  if (!profile) return null;

  const logout = () => {
    localStorage.removeItem("user_data");
    dispatch(clearProfile());
  };

  return (
    <div className="profile-info">
      <img className="profile-info__image" src={icAccount} title="" alt="" />
      <div className="profile-info__content">
        <h4 className="profile-info__title">{profile.name || "Unknow Name"}</h4>
        <div className="profile-info__subtitle">{profile.email}</div>
        <a href="#" onClick={logout} className="profile-info__action">
          Keluar
        </a>
      </div>
    </div>
  );
};

export default React.memo(ProfileInfo);
