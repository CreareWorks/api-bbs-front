import React from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch } from "../../../re-ducks/store/hook"; 

import { schema } from "../utils/index";

import type { LoginInput } from "../types/login";

import { Login } from "../../../re-ducks/ducks/Auth/oparations";
import { useTokenSelector } from "../../../re-ducks/ducks/Auth/tokenSlice";
import { useNavigate } from "react-router-dom";

import { setAuthTrue, setMeMeta, useAuthSelector, useMeMetaSelector } from "../../../re-ducks/ducks/Auth/authCheckSlice"


const useLoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    // 認証中にログイン画面へ遷移された時、DashBoradへ
    const { authCheck  } = useAuthSelector();
    authCheck && navigate('/authAfter/dashborad');

    // 現在のme情報を取得
    const meMeta = useMeMetaSelector();

    // 検証中
    const { token } = useTokenSelector();

    // react-hook-form を使用する時の宣言
    // register : state的存在
    // handleSuibmit : バリデーション
    // control : 
    const { register, handleSubmit, formState: {errors} } = useForm<LoginInput>({
        resolver: yupResolver(schema), // ../utils/indexで定義した内容を適用 バリデーション
        reValidateMode: 'onChange'
    });

    /**
     * SubmitHandler は handleSubmitの型定義
     * ジェネリクスで、useFormで渡した型を渡す事で、引数e で各入力部の値を受け取る事ができる
     * eの実態はregisterで保持している値(stateみたいなやつ)
     */
    const clickHandler : SubmitHandler<LoginInput> = async(data) => { // async await を指定しておく事で、返却値がpromiseで返却されなくなる。　エンドポイント叩く時は、書く。
        const result = await dispatch(Login(data)); // reduxに関連してるメソッドを囲む

        if (result) {
            // me　のaction login成功してれば当actionを実行しても同義 reduxで管理している「authCheck」をloginクリック後にSETするため、ここで実行
            dispatch(setAuthTrue());
            dispatch(setMeMeta(meMeta));
            // ログイン後はdashboradへ
            navigate('/authAfter/dashborad');
        }

    }

    // LoginForm.tsxで使用する値をreturnする。
    return {
        token,
        register,
        handleSubmit,
        errors,
        clickHandler
    }

}  


export default useLoginForm;