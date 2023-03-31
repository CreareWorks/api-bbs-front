import React from "react";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

import type { RegisterInput } from "../types/registerType";

import { useAuthSelector } from "../../../re-ducks/ducks/Auth/authCheckSlice"
import { schema } from "../utils/index";

import registerAPI from "../API/register";


const useRegister = () => {

     // 認証中に会員登録画面へ遷移された時、DashBoradへ
    const navigate = useNavigate();
    const { authCheck  } = useAuthSelector();
    authCheck && navigate('/authAfter/dashborad');

    // バリデーション
    const { register, handleSubmit, formState: {errors} } = useForm<RegisterInput>({
        resolver: yupResolver(schema),
        reValidateMode: 'onChange'
    })

    // 登録ボタン押下
    const clickRegisterHandler: SubmitHandler<RegisterInput> = async(data) => {
        const result = await registerAPI(data);
        
        if (result.status = 200) { // 200等は本当は定数管理しておきたいところ。
            navigate('/auth/login');
        }
    }

    return {
        register,
        handleSubmit,
        errors,
        clickRegisterHandler
    }
}

export default useRegister;