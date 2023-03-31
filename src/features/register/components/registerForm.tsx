import React from "react";
import useRegister from "../hooks/useRegister";

// ログイン画面同様認証中にアクセスがあった場合は、ダッシュボード画面へ遷移させる。

const RegisterForm = () => {
    // 仮スタイル
    const formStyle = {
        display: "flex",
        flexFlow: "column",
    }

    const {
        register,
        handleSubmit,
        errors,
        clickRegisterHandler
    } = useRegister();

    
    return (
        <>
            <h1>会員登録フォーム</h1>
            <form style={formStyle}>
                <label htmlFor="name">
                    name
                    <input
                        id="name"
                        type="text"
                        {...register('name')}
                    />
                </label>
                <p>{errors.name?.message}</p>

                <label htmlFor="email">
                    email
                    <input
                        id="email"
                        type="text"
                        {...register('email')}
                    />
                </label>
                <p>{errors.email?.message}</p>

                <label htmlFor="password">
                    password
                    <input
                        id="password"
                        type="password"
                        {...register('password')}
                    />
                </label>
                <p>{errors.password?.message}</p>

                <label htmlFor="password_confirmation">
                    password(確認)
                    <input
                        id="password_confirmation"
                        type="password"
                        {...register('password_confirmation')}
                    />
                </label>
                <p>{errors.password_confirmation?.message}</p>

                <button 
                    type="button"
                    onClick={handleSubmit(clickRegisterHandler)}
                >
                    新規登録
                </button>
            </form>
        </>
    )

}

export default RegisterForm;