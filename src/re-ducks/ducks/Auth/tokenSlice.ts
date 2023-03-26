import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { useAppSelector } from "../../../re-ducks/store/hook";
import { RootState } from "../../../re-ducks/store/store";
import { LoginResponse } from "./type";

export const tokenSlice = createSlice({
    name: 'token',
    initialState: {token: ""}, // PayloadActionのジェネリクスには、こちらのstateで管理する値の型を渡す　""で定義するとNG オブジェクトで指定する事によってimmerによってオブジェクトを新規にコピーしてstateに保持してくれるため、errにならない。
    reducers: {
        setToken: (state, action: PayloadAction<LoginResponse>) => {
            state.token = action.payload.access_token
        }
    }
});

// reduxのstore からSelectorでどこでも呼び出せるようにする。
export const useTokenSelector = () => {
    const token = useAppSelector((state: RootState) => state.token);
    return { token } // objectで返す
}

export const { setToken } = tokenSlice.actions;
export default tokenSlice.reducer;