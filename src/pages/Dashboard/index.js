import React from "react";
import { useSelector } from "react-redux";
import { DashboardLayout, PanelInfo, CardTable } from "../../components";

// Komponen dashboard
const Dashboard = () => {
  const profile = useSelector((store) => store.profile);
  return (
    <DashboardLayout title="Dashboard">
      <h1 style={{ margin: 0, marginBottom: 16 }}>
        Halo, {profile && profile.name ? profile.name : ""}
      </h1>
      <PanelInfo />
      <CardTable />
    </DashboardLayout>
  );
};

export default Dashboard;
