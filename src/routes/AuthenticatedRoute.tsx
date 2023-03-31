import React from 'react';
import { RouteObject, useRoutes, Router, BrowserRouter } from 'react-router-dom'

// 各コンポーネント
import Dashborad from '../features/DashBoard/components';
import ChangeUserMetaRoutes from '../features/changeUserMeta/routes/index';
import PostsRoute from '../features/posts/routes';

// 認証チェック用プロバイダー
import AuthProvider from '../Provider/AuthProvider';

const router: RouteObject[] = [
    {path: 'dashborad/*', element: <Dashborad /> },
    {path: 'changeUserMeta/*', element: <ChangeUserMetaRoutes/> },
    {path: 'posts/*', element: <PostsRoute /> },
]

const AuthenticatedRoute = () => {

    const route = useRoutes(router);

    return (
        <>
            <AuthProvider>
                {route}
            </AuthProvider>
        </>
    )


};

export default AuthenticatedRoute;