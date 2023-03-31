import React from "react";

import useChangePass from "../hooks/useChangePass";

const ChangePass = () => {
    const formStyle = {
        display: "flex",
        flexFlow: "column",
    }

    const {
        register,
        handleSubmit,
        errors,
        clickChangePassHandler
    } = useChangePass();

    return (
        <>
            <h1>changePass</h1>

            <form style={formStyle}>

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
                    onClick={handleSubmit(clickChangePassHandler)}
                >
                    名前変更
                </button>

            </form>
        </>
    )
}

export default ChangePass;