import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { useAppSelector } from "../../store/hook";
import { RootState } from "../../store/store";
import { MeResponse } from "../../../types/meResponse";

export const authCheckSlice = createSlice({
    name: 'authCheck',
    initialState: {
        authStatus: false,
        meMeta: {
            id: 0,
            name: "",
            email: "",
            email_verified_at: "",
            created_at: "",
            updated_at: ""
        }
    },
    reducers: {
        setAuthTrue: (state) => {
            state.authStatus = true;
        },
        setAuthFalse: (state) => {
            state.authStatus = false;
        },
        setMeMeta: (state, action: PayloadAction<MeResponse>) => {
            state.meMeta = action.payload
        }
    }
});

// reduxのstore からSelectorでどこでも呼び出せるようにする。
export const useAuthSelector = () => {
    const authCheck = useAppSelector((state: RootState) => state.authCheck.authStatus);
    return { authCheck } // objectで返す
}
export const useMeMetaSelector = () => {
    const meMeta = useAppSelector((state: RootState) => state.authCheck.meMeta);
    return meMeta // objectで返す
}

export const { setAuthTrue, setAuthFalse, setMeMeta } = authCheckSlice.actions;
export default authCheckSlice.reducer;