import React from "react";
import { Routes, Route } from "react-router-dom";

import ChangeName from "./ChangeNameRoute";
import ChangePass from "./ChangePassRoute";

const ChangeUserMetaRoutes = () => {
    return (
        <Routes>
            <Route path="changeName" element={ <ChangeName /> } />
            <Route path="changePass" element={ <ChangePass /> } />
        </Routes>
    )
}

export default ChangeUserMetaRoutes;
