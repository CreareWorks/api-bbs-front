import React from 'react';
import { RouteObject, useRoutes, Router, BrowserRouter } from 'react-router-dom'

// 各コンポーネント
import Dashborad from '../features/DashBoard/components';

// 認証チェック用プロバイダー
import AuthProvider from '../Provider/AuthProvider';
// 非認証時の遷移先コンポーネント
import Top from '../features/top/index';

const router: RouteObject[] = [
    {path: 'dashborad/*', element: <Dashborad /> },
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