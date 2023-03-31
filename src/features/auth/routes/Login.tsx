import React from "react";
import type { FC } from "react";
import LoginForm from "../components/LoginForm";

const Login : FC = () => {
    return (
        <>
            <h1>ログイン</h1>
            <LoginForm />
        </>
    )
}


export default Login;