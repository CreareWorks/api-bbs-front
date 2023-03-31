import React from "react";
import styled from "styled-components";

import useLoginForm from "../hooks/useLoginForm";

const LoginForm = () => {
    
    // 分割代入
    const {
            token,
            register,
            handleSubmit,
            errors,
            clickHandler
        } = useLoginForm();

    return (
        <>
        <h3>selector確認:{ token.token }</h3>
        
            <form>
                <label htmlFor="mail">
                    email:　
                    <input 
                        id="mail" 
                        type="text" 
                        {...register('email')} // onChange でuseState で値更新してvalueにstateの値を更新してる事と同じ動作
                    />
                </label>
                <p>{errors.email?.message}</p>
                <br />
                <label htmlFor="password">
                    password:　
                    <input 
                        id="password" 
                        type="password"
                        {...register('password')}
                    />
                </label>
                <p>{errors.password?.message}</p>
                <br />

                <button type="button" onClick={handleSubmit(clickHandler)}>ログイン</button>
            
            </form>
        </>
    )
}

export default LoginForm;