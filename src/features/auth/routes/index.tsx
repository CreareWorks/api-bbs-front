import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./Login";

const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="login" element={ <Login /> } />
        </Routes>
    )
}

export default AuthRoutes;
