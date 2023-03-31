import type { Action } from "@reduxjs/toolkit";
import type { Dispatch } from "react";

// エンドポイントを読み込み
import login from "../../../features/auth/API/login";
import me from "../../../API/auth/me";

// 型定義ファイルを読み込み
import type { LoginInput } from "../../../features/auth/types/login";
import type { LoginResponse } from "../../../re-ducks/ducks/Auth/type";
import type { MeResponse } from "../../../types/meResponse";

import { setToken } from "./tokenSlice";
import { setAuthTrue, setAuthFalse, setMeMeta } from "./authCheckSlice"

/**
 * 非同期処理や、副作用のある処理はここに記述する。 
 */


export const Login = (login_data: LoginInput) => {

    return async (dispatch: Dispatch<Action>) => { // Dispatch<Action> で型定義して、dispatchが使えるようになる。
        try {            
            // ここにAPIの処理を記述していく。
            // login 実行
            const response: LoginResponse  = await login(login_data);

            // sliceで定義したactionをdispatchで実行
            // response内容(access_token)をreduxで保持してみる。
            dispatch(setToken(response));

            if (response.status === 200) {
                // Cokkieにaccess_tokenを保持させる。
                document.cookie = "Authorization=" + "Bearer " + response.access_token;
                return true;
            }

            return false;

        } catch (e) {
            if (e instanceof Error) {
                throw new Error (e.message)
            }
        }
    }
}

export const Me = () => {

    return async (dispatch: Dispatch<Action>) => {
        try {
                        
            const response: MeResponse  = await me();

            if (response.id) {
                dispatch(setAuthTrue());
                dispatch(setMeMeta(response));
            } else {
                dispatch(setAuthFalse());
            }

        } catch (e) {
            if (e instanceof Error) {
                throw new Error (e.message)
            }
        }
    }

}