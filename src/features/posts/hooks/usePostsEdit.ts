import React, { useEffect, useLayoutEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

import type { PostsCreateInput as PostsEditInput } from "../types/postsCreateInput";
import type { PostList } from "../types/postsBaseResponse";

import { schema } from "../utils/postsCreateVali";

import postsEdit from "../API/postsEdit";
import postsShow from "../API/postsShow";

const postsEditHook = () => {

    /**
     * states
     */
    const [createResult, setEditResult] = useState('');
    const [editMeta, setEditMeta] = useState<PostList>({
        post_id: 0,
        post_user_id: 0,
        post_title: "",
        post_body: "",
        created_at: "",
        updated_at: "",
    });
    const navigate = useNavigate();

    // navigatie遷移元から値を受け取る
    const location = useLocation();
    const postId = location.state;

    // 初期値を受け取る
    useLayoutEffect(() => {
        const fn = async() => {
            const result = await postsShow(postId);
            setEditMeta(result.result);
        }
        fn();
    }, []);

    // バリデーション
    const { register, handleSubmit, reset, setValue, formState: {errors} } = useForm<PostsEditInput>({
        resolver: yupResolver(schema),
        reValidateMode: 'onChange',
    })

    // 順番としては、レンダリング前に初期値表示のためのSELETを行う→useFormで初期化→下記でformの初期値設定
    useEffect(() => {
        setValue('post_title', editMeta.post_title);
        setValue('post_body', editMeta.post_body);
    },[editMeta])

    // [投稿]ボタン押下
    const clickPostEditHandler: SubmitHandler<PostsEditInput> = async(data:PostsEditInput) => {
        try {
            // 投稿API実行
            const result = await postsEdit(data, postId);

            if (result.status === 200) {
                // 投稿完了文言をセット
                setEditResult('正常に編集完了しました。');
            }

        } catch (e) {
            // 失敗文言をセット
            setEditResult('システムerr');

            if (e instanceof Error) {
                throw new Error (e.message)
            }
        }
    }

    // 戻るボタン
    const beforeShowDisplay = () => {
        navigate('/authAfter/posts/postsList');
    }

    return {
        register,
        handleSubmit,
        errors,
        createResult,

        clickPostEditHandler,
        beforeShowDisplay,
    }
}

export default postsEditHook;