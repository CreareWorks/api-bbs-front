import React from "react";

import * as yup from 'yup';

const regexp = {
    name: /^[ァ-ヴー]{5,}$/,
    email : /^[A-Za-z0-9._%+-]+@[A-Za-z.-]+\.[A-Z]{1,}$/i,
    password: /((?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[+-_])){8,}/,
    password_confirmation: /((?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[+-_])){8,}/
}
export const schema = yup.object().shape({
    name: 
        yup.string().
        required('必須').
        matches(regexp.name, '名前入力不正'),

    email: 
        yup.string().
        required('必須').
        matches(regexp.email, 'メールアドレス入力不正'),

    password: 
        yup.string().
        required('必須').
        matches(regexp.password, 'pass入力不正'),

    password_confirmation: 
        yup.string()
        .required('必須').
        matches(regexp.password_confirmation, 'pass不一致')
        .oneOf([yup.ref('password')]),

})