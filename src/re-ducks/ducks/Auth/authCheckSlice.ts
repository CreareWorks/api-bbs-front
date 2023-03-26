import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { useAppSelector } from "../../store/hook";
import { RootState } from "../../store/store";
import { MeResponse } from "../../../types/meResponse";

export const authCheckSlice = createSlice({
    name: 'authCheck',
    initialState: {authStatus: false},
    reducers: {
        setAuthTrue: (state) => {
            state.authStatus = true;
        },
        setAuthFalse: (state) => {
            state.authStatus = false;
        },
    }
});

// reduxのstore からSelectorでどこでも呼び出せるようにする。
export const useAuthSelector = () => {
    const authCheck = useAppSelector((state: RootState) => state.authCheck.authStatus);
    return { authCheck } // objectで返す
}

export const { setAuthTrue, setAuthFalse } = authCheckSlice.actions;
export default authCheckSlice.reducer;