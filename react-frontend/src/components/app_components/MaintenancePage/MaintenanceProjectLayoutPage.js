import React from "react";
import ProjectLayout from "../../Layouts/ProjectLayout";
import { connect } from "react-redux";
import MaintenancePage from "./MaintenancePage";

const MaintenanceProjectLayoutPage = (props) => {
  return (
    <ProjectLayout>
      <MaintenancePage />
    </ProjectLayout>
  );
};

const mapState = (state) => {
  const { user, isLoggedIn } = state.auth;
  return { user, isLoggedIn };
};

const mapDispatch = (dispatch) => ({
  alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(MaintenanceProjectLayoutPage);