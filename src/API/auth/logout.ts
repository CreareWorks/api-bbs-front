import { axiosClient } from "../../config/index"; // axiosでAPIを呼び出すための初期設定ファイルをimport
import type { LogoutResponse } from "../../types/logoutResponse"; // 等ファイルでは、login エンドポイントを叩くため、loginエンドポイントを叩いた時のレスポンスの方定義ファイルをimport
import type { AxiosResponse } from "axios"; // axiosが用意している方定義　ジェネリクスで、LoginResponse


// logoutは画面遷移する必要ないのでRoute定義しない
const logout = async() => {
    const LOGIN_ENDPOINT = "/auth/logout";
    const response: AxiosResponse<LogoutResponse> = await axiosClient.post(
        LOGIN_ENDPOINT
    );

    return response.data;
}

export default logout;

