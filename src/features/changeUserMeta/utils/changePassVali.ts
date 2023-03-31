import React from "react";

import * as yup from 'yup';

const regexp = {
    password: /((?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[+-_])){8,}/,
    password_confirmation: /((?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[+-_])){8,}/
}
export const schema = yup.object().shape({
    
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