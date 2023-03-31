import { axiosClient } from "../../../config/index"; // axiosでAPIを呼び出すための初期設定ファイルをimport
import type { AxiosResponse } from "axios";

import type { PostsBaseResponse } from "../types/postsBaseResponse";

import type { PostsCreateInput } from "../types/postsCreateInput";

// front のMODEL部分となる

const postsEdit = async( posts_data: PostsCreateInput, post_id: number ) => {

    const POSTS_ENDPOINT = `/posts/${post_id}`;
    const response: AxiosResponse<PostsBaseResponse<boolean>> = await axiosClient.put(POSTS_ENDPOINT, posts_data);

    return response.data;
    
}

export default postsEdit;