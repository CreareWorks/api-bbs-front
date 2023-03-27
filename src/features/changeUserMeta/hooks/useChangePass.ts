import React from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

import type { ChangeInputPass } from "../types/changeInputPass";

import { useMeMetaSelector } from "../../../re-ducks/ducks/Auth/authCheckSlice"
import { useNavigate } from "react-router-dom";
import { schema } from "../utils/changePassVali";

import changeUserMetaAPI from "../API/changeUserMeta";


const useChangePass = () => {

    const navigate = useNavigate();
    const meMeta = useMeMetaSelector();

    // バリデーション
    const { register, handleSubmit, formState: {errors} } = useForm<ChangeInputPass>({
        resolver: yupResolver(schema),
        reValidateMode: 'onChange'
    })

    // 登録ボタン押下
    const clickChangePassHandler: SubmitHandler<ChangeInputPass> = async(data) => {
        const result = await changeUserMetaAPI(data, meMeta.id);
        
        if (result.status = 200) {
            navigate('/authAfter/dashborad');
        }
    }

    return {
        register,
        handleSubmit,
        errors,
        clickChangePassHandler
    }
}

export default useChangePass;