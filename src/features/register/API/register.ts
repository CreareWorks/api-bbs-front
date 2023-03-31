import React from "react";
import { axiosClient } from "../../../config";

import type { AxiosResponse } from "axios";

// 会員登録フォーム 型定義ファイルをimport
import { RegisterInput } from "../types/registerType";
import { RegisterResponse } from "../types/registerResponseType";

const register = async(register_data: RegisterInput) => {
    const REGISTER_ENDPOINT = "/register";
    const response: AxiosResponse<RegisterResponse> = 
        await axiosClient.post(REGISTER_ENDPOINT, register_data);

    return response.data;
}

export default register;