import React from "react";

import useChangeName from "../hooks/useChangeName";

const ChangeName = () => {
    const formStyle = {
        display: "flex",
        flexFlow: "column",
    }
    const buttonStyle = {
        width: 100,
        marginTop: 20,
        marginButtom: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
    }

    const {
        register,
        handleSubmit,
        errors,
        clickChangeNameHandler
    } = useChangeName();

    return (
        <>
            <h1>changeName</h1>

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

                <button 
                    type="button" 
                    style={buttonStyle}
                    onClick={handleSubmit(clickChangeNameHandler)}
                >
                    名前変更
                </button>

            </form>
        </>
    )
}

export default ChangeName;