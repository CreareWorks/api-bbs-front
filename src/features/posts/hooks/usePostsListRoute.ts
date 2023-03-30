import React, { useState } from "react";

import type { Posts } from "../types/postsBaseResponse";
import { result } from "../utils/initilalize";

const postsListRouteHook = () => {

    // stateを定義
    const [checkUpdateList, setCheckUpdatelist] = useState<Posts>({
        status: 0,
        message: "",
        success: false,
        result: result
    })
    /**
     * 渡す値はSELECTで取得したオブジェクト
     * 値の更新状況を管理する。
     */
    const setState = (val:any) => {
        setCheckUpdatelist(val);
    }


    return { checkUpdateList, setState };
}

export default postsListRouteHook;