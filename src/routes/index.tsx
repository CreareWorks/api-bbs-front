import React from 'react';
import { RouteObject, useRoutes, Router, BrowserRouter } from 'react-router-dom'

// 認証通過後Route
import AuthenticatedRoute from './AuthenticatedRoute';

import Top from '../features/top/index';
import AuthRoutes from '../features/auth/routes';

// 非認証でもアクセスできるRoute
export const router: RouteObject[] = [
    // 認証前にアクセス可
    {path: '/', element: <Top /> },
    {path: 'auth/*', element: <AuthRoutes /> },

    // 認証後Routeを一括管理しているコンポーネントを指定
    {path: 'authAfter/*', element: <AuthenticatedRoute /> },

]

export const Route = () => {
    const route = useRoutes(router)
    return (
        <>
            {route}
        </>
    )
}

export default Route;