import React from "react";
import type { FC } from "react";

// hookを読み込み
import postsListRouteHook from "../hooks/usePostsListRoute";

// 子コンポーネントを読み込み
import PostsCreate from "../components/PostsCreate";
import PostsList from "../components/PostsList";

const PostsListRoute : FC = () => {
    const { checkUpdateList, setState } = postsListRouteHook();

    return (
        <>
            <PostsCreate checkUpdateList={checkUpdateList} setState={setState} />
            <PostsList checkUpdateList={checkUpdateList} setState={setState} />
        </>
    )
}


export default PostsListRoute;