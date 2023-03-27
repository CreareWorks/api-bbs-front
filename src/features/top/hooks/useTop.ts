import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthSelector } from '../../../re-ducks/ducks/Auth/authCheckSlice';

const useTop = () => {
    const navigate = useNavigate();
    const { authCheck } = useAuthSelector();

    const clickLoginOrDash = () => {
        if (authCheck) {
            navigate('authAfter/dashborad');
        } else {
            navigate('auth/login');
        }
    }

    const clickRegisterBtn = () => {
        navigate('register');
    }

    return {
        authCheck,
        clickLoginOrDash,
        clickRegisterBtn
    }
}

export default useTop;