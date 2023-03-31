import React from "react";

import postsEditHook from "../hooks/usePostsEdit";

const PostsEdit: React.FC = () => {

    // 仮スタイル
    const formStyle = {
        display: "flex",
        flexFlow: "column",
        padding: '5px',
        borderBottom: '1px solid gray'
    }
    const style = {
        width: 100,
        marginTop: 20,
        marginButtom: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
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
        
        clickPostEditHandler,
        beforeShowDisplay,
    } = postsEditHook();

    return (
        <>
            <p>投稿編集</p>
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
                    style={style}
                    onClick={handleSubmit(clickPostEditHandler)}
                >
                    編集
                </button>

                <button 
                    type="button" 
                    style={style}
                    onClick={beforeShowDisplay}
                >
                    戻る
                </button>
            </form>
        </>
    )
}

export default PostsEdit;