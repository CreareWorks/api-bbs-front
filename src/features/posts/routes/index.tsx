import React from "react";

import { Routes, Route } from "react-router-dom";

import PostsListRoute from "./PostsListRoute"; // 投稿一覧　検索
import PostsEditRoute from "./PostsEditRoute"; // 編集画面

const PostRoutes = () => {
    return (
        <Routes>
            <Route path="postsList" element={ <PostsListRoute /> } />
            <Route path="postsEdit" element={ <PostsEditRoute /> } />
        </Routes>
    )
}

export default PostRoutes;
