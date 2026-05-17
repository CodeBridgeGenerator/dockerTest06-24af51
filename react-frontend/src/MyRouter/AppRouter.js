import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import ProtectedRoute from './ProtectedRoute';

import SingleHighwaysPage from "../components/app_components/HighwaysPage/SingleHighwaysPage";
import HighwayProjectLayoutPage from "../components/app_components/HighwaysPage/HighwayProjectLayoutPage";
import SingleMaintenancePage from "../components/app_components/MaintenancePage/SingleMaintenancePage";
import MaintenanceProjectLayoutPage from "../components/app_components/MaintenancePage/MaintenanceProjectLayoutPage";
//  ~cb-add-import~

const AppRouter = () => {
    return (
        <Routes>
            {/* ~cb-add-unprotected-route~ */}
<Route path="/highways/:singleHighwaysId" exact element={<SingleHighwaysPage />} />
<Route path="/highways" exact element={<HighwayProjectLayoutPage />} />
<Route path="/maintenance/:singleMaintenanceId" exact element={<SingleMaintenancePage />} />
<Route path="/maintenance" exact element={<MaintenanceProjectLayoutPage />} />
            <Route element={<ProtectedRoute redirectPath={'/login'} />}>{/* ~cb-add-protected-route~ */}</Route>
        </Routes>
    );
};

const mapState = (state) => {
    const { isLoggedIn } = state.auth;
    return { isLoggedIn };
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data)
});

export default connect(mapState, mapDispatch)(AppRouter);
