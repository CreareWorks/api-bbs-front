import React from "react";

import { useNavigate} from "react-router-dom";
import { useAppDispatch } from "../re-ducks/store/hook"; 


import logout from '../API/auth/logout';

import { LogoutResponse } from '../types/logoutResponse';
import { setAuthFalse, useAuthSelector, useMeMetaSelector } from '../re-ducks/ducks/Auth/authCheckSlice';

import type { MeResponse } from "../types/meResponse";

const useHeaderHook = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { authCheck } = useAuthSelector();

    const meMeta = useMeMetaSelector();

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
        dashboradDisplay,
        meMeta
    }
}

export default useHeaderHook;