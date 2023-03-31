import React from "react";
import type { FC } from "react";

// 子コンポーネントを読み込み
import PostsEdit from "../components/PostsEdit";

const PostsEditRoute : FC = () => {

    return (
        <>
            <PostsEdit />
        </>
    )
}


export default PostsEditRoute;