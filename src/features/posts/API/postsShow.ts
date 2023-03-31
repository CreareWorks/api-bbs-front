import { axiosClient } from "../../../config/index"; // axiosでAPIを呼び出すための初期設定ファイルをimport
import type { AxiosResponse } from "axios";

import type { PostsBaseResponse } from "../types/postsBaseResponse";
import type { PostList } from "../types/postsBaseResponse";

// front のMODEL部分となる

const postsShow = async( postId: number ) => {

    const POSTS_ENDPOINT = `/posts/${postId}`;
    const response: AxiosResponse<PostsBaseResponse<PostList>> = await axiosClient.get(POSTS_ENDPOINT);

    return response.data;
    
}

export default postsShow;