import { axiosClient } from "../../../config/index"; // axiosでAPIを呼び出すための初期設定ファイルをimport

import type { LoginResponse } from "../../../re-ducks/ducks/Auth/type"; // 等ファイルでは、login エンドポイントを叩くため、loginエンドポイントを叩いた時のレスポンスの方定義ファイルをimport
import type { AxiosResponse } from "axios"; // axiosが用意している方定義　ジェネリクスで、LoginResponse
import type { LoginInput } from "../types/login";

// front のMODEL部分となる

const login = async( login_data: LoginInput ) => {
    const LOGIN_ENDPOINT = "/auth/login";
    const response: AxiosResponse<LoginResponse> = await axiosClient.post(LOGIN_ENDPOINT, login_data);

    return response.data;
}

export default login;