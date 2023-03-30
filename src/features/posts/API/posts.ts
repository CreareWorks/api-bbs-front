import { axiosClient } from "../../../config/index"; // axiosでAPIを呼び出すための初期設定ファイルをimport
import type { AxiosResponse } from "axios";

import type { PostsBaseResponse } from "../types/postsBaseResponse";
import type { PostList } from "../types/postsBaseResponse";

import type { PostsCreateInput } from "../types/postsCreateInput";

// front のMODEL部分となる

const postsCreate = async( posts_data: PostsCreateInput ) => {

    const POSTS_ENDPOINT = "/posts/";
    const response: AxiosResponse<PostsBaseResponse<PostList>> = await axiosClient.post(POSTS_ENDPOINT, posts_data);

    return response.data;
    
}

export default postsCreate;