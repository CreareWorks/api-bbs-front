import React from "react";

import { Routes, Route } from "react-router-dom";

import PostsListRoute from "./PostsListRoute"; //投稿一覧　検索

const ChangeUserMetaRoutes = () => {
    return (
        <Routes>
            <Route path="postsList" element={ <PostsListRoute /> } />
            {/* 編集画面を新規定義する */}
        </Routes>
    )
}

export default ChangeUserMetaRoutes;
