import { axiosClient } from "../../../config/index"; // axiosでAPIを呼び出すための初期設定ファイルをimport
import type { AxiosResponse } from "axios";

import type { Posts } from "../types/postsBaseResponse";

// front のMODEL部分となる


const postsGet = async( pageUrl: string, searchText: string = "ALL123456789" ) => { // 初期値のままであれば全権返す

    // 空文字で検索時 全て取得できるように調整
    (searchText === "") && (searchText = "ALL123456789") ;

    // 省略部分除去(http:://localhost/api)
    pageUrl = pageUrl.substring(20); 

    // path整形
    const frontPageUrl = pageUrl.substring(0,14); //パス前半部分を整形(/posts/search/)
    const backPageUrl = pageUrl.substring(pageUrl.indexOf('?page=')); //パス後半部分を整形(?page=~)

    const POSTS_GET_ENDPOINT = `${frontPageUrl}${searchText}${backPageUrl}`;
    const response: AxiosResponse<Posts> = await axiosClient.get(POSTS_GET_ENDPOINT);

    return response.data;
}

export default postsGet;