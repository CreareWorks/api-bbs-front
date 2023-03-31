import React from "react";
import postsCreateHook from "../hooks/usePostsCreate";

// 型指定
import type { FnProps } from "../types/postsProps";

const PostsCreate: React.FC<FnProps> = (props) => {
    // 仮スタイル
    const formStyle = {
        display: "flex",
        flexFlow: "column",
        padding: '5px',
        borderBottom: '1px solid gray'
    }
    const style2 = {
        width: '50%',
        marginTop: 20,
        marginButtom: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
    }
    const style3 = {
        color: 'red'
    }

    const {
        register,
        handleSubmit,
        errors,
        createResult,
        clickPostCreateHandler
    } = postsCreateHook(props);


    return (
        <>
            <p>新規投稿</p>
            <p style={style3}>{createResult}</p>
            <form style={formStyle}>

                <label htmlFor="post_title">
                    タイトル
                    <input 
                        type="text"
                        id="post_title"
                        maxLength={15} 
                        style={style2} 
                        {...register('post_title')}
                    />
                </label>
                <p>{errors.post_title?.message}</p>

                <label htmlFor="post_body">
                    本文
                    <textarea 
                        maxLength={140} 
                        style={style2} 
                        id="post_body"
                        {...register('post_body')}
                    ></textarea>
                </label>
                <p>{errors.post_body?.message}</p>

                <button 
                    type="button" 
                    onClick={handleSubmit(clickPostCreateHandler)}
                >
                    投稿
                </button>
            </form>
        </>
    )
}

export default PostsCreate;