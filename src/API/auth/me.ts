import { axiosClient } from "../../config/index"; // axiosでAPIを呼び出すための初期設定ファイルをimport
import type { MeResponse } from "../../types/meResponse"; // 等ファイルでは、login エンドポイントを叩くため、loginエンドポイントを叩いた時のレスポンスの方定義ファイルをimport
import type { AxiosResponse } from "axios"; // axiosが用意している方定義　ジェネリクスで、LoginResponse


const me = async() => {
    const LOGIN_ENDPOINT = "/auth/me";
    const response: AxiosResponse<MeResponse> = await axiosClient.post(
        LOGIN_ENDPOINT
    );

    return response.data;
}

export default me;

