import authCheckSlice from "@/re-ducks/ducks/Auth/authCheckSlice";
import React, { FC, ReactNode, useEffect } from "react";
import { useLayoutEffect } from "react";
import { Me } from "../re-ducks/ducks/Auth/oparations";
import { useAppDispatch } from "../re-ducks/store/hook";
import { useAuthSelector } from '../re-ducks/ducks/Auth/authCheckSlice';

import { useNavigate, useLocation, } from "react-router-dom";

type Props = {
    children: ReactNode
}

// このProviderで囲んだ子コンポーネントをマウントする前に通る処理
const AuthProvider: FC<Props> = ({children}) => {
    
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useAppDispatch();
    const { authCheck } = useAuthSelector();

    // 認証チェック　結果はreduxで管理しているauthCheckに格納
    const checkLoginState = async() => {
        await dispatch(Me());
    }
    useEffect(() => {
        // 認証チェック
        checkLoginState();
        // 非認証なら「/」を指定させる。　このままでは/をURLへ渡すだけなので、非認証時にはAuthenticatedRouteで/のパスを指定させる。
        !authCheck && navigate('/');
    },[location.pathname])

    return (
        <>
            {children}
        </>
    )
}


export default AuthProvider;