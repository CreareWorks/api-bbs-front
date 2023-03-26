import React from "react";

import { useNavigate} from "react-router-dom";
import { useAppDispatch } from "../../../re-ducks/store/hook"; 


import logout from '../../../API/auth/logout';

import { LogoutResponse } from '../../../types/logoutResponse';
import { setAuthFalse, useAuthSelector } from '../../../re-ducks/ducks/Auth/authCheckSlice';

const useHeaderHook = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const { authCheck } = useAuthSelector();

    // dashborad画面遷移
    const dashboradDisplay = () => {
        navigate('authAfter/dashborad');
    }

    // login画面遷移
    const loginDisplay = () => {
        navigate('auth/login');
    }

    // top文字クリック
    const clickTop = () => {
        navigate('/');
    }

    // logout
    const clickLogoutHandler = async() => {
        const response: LogoutResponse  = await logout();
        
        if (response.status === 200) {
            dispatch(setAuthFalse());
            clickTop();
        }
    }

    return {
        clickLogoutHandler,
        loginDisplay,
        clickTop,
        authCheck,
        dashboradDisplay
    }
}

export default useHeaderHook;