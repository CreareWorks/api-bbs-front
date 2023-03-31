import React from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

import type { ChangeInputName } from "../types/changeInputName";

import { useMeMetaSelector } from "../../../re-ducks/ducks/Auth/authCheckSlice"
import { useNavigate } from "react-router-dom";
import { schema } from "../utils/changeNameVali";

import changeUserMetaAPI from "../API/changeUserMeta";


const useChangeName = () => {

    const navigate = useNavigate();
    const meMeta = useMeMetaSelector();

    // バリデーション
    const { register, handleSubmit, formState: {errors} } = useForm<ChangeInputName>({
        resolver: yupResolver(schema),
        reValidateMode: 'onChange'
    })

    // 登録ボタン押下
    const clickChangeNameHandler: SubmitHandler<ChangeInputName> = async(data) => {
        const result = await changeUserMetaAPI(data, meMeta.id);
        
        if (result.status = 200) {
            navigate('/authAfter/dashborad');
        }
    }

    return {
        register,
        handleSubmit,
        errors,
        clickChangeNameHandler
    }
}

export default useChangeName;