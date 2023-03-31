import React, { SetStateAction, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

import type { PostsCreateInput } from "../types/postsCreateInput";
import type { FnProps } from "../types/postsProps";

import { schema } from "../utils/postsCreateVali";

import postsCreate from "../API/posts";
import postsGet from "../API/postsGet";

const postsCreateHook = (props:FnProps) => {

    const [createResult, setCreateResult] = useState('');

    // バリデーション
    const { register, handleSubmit, reset, formState: {errors} } = useForm<PostsCreateInput>({
        resolver: yupResolver(schema),
        reValidateMode: 'onChange'
    })

    // [投稿]ボタン押下
    const clickPostCreateHandler: SubmitHandler<PostsCreateInput> = async(data:PostsCreateInput) => {
        try {
            // 投稿API実行
            const result = await postsCreate(data);

            if (result.status === 200) {
                // フォームリセット
                reset();
                // 投稿完了文言をセット
                setCreateResult('正常に投稿完了しました。');

                // 新規投稿時　最新の投稿一覧をセットする。
                const getPostResult = await postsGet("http://localhost/api/posts/search/ALL123456789?page=1"); // ここでは新規投稿後SLECTした結果さえ分かればいいので、固定で1を渡す
                props.setState(getPostResult);
            }

        } catch (e) {
            // 失敗文言をセット
            setCreateResult('システムerr');

            if (e instanceof Error) {
                throw new Error (e.message)
            }
        }
    }

    return {
        register,
        handleSubmit,
        errors,
        createResult,
        clickPostCreateHandler
    }
}

export default postsCreateHook;