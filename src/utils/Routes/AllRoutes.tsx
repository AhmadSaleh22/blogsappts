import React, { lazy } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
// import Loadable from "components/Loadable";
import Loadable from "../../components/Loadable";

// const Login = Loadable(lazy(() => import("../../components/Login/index")));
export const AllRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/login" element={<Login />} /> */}
            </Routes>
        </BrowserRouter>
    );
};
