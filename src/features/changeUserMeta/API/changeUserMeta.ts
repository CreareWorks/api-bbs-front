import { axiosClient } from "../../../config/index";
import type { AxiosResponse } from "axios"; 

import type { ChangeInputName } from "../types/changeInputName";
import type { ChangeInputPass } from "../types/changeInputPass";
import type { ChangeUserMetaResponse } from "../types/changeUserMetaResponse";

// pass or name をUPDATEするエンドポイント
const changeUserMeta = async( 
        changeInputData: ChangeInputName | ChangeInputPass,
        id: number 
    ) => {
        const CHANGE_USER_META_ENDPOINT = `/users/${id}`;
        const response: AxiosResponse<ChangeUserMetaResponse> = 
            await axiosClient.put(CHANGE_USER_META_ENDPOINT, changeInputData);

        return response.data;
    }

export default changeUserMeta;