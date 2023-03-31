import React from "react";

import * as yup from 'yup';

const regexp = {
    email : /^[A-Za-z0-9._%+-]+@[A-Za-z.-]+\.[A-Z]{1,}$/i,
    password: /((?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[+-_])){8,}/
}
export const schema = yup.object().shape({
    email: yup.string().required('必須').matches(regexp.email, 'メールアドレス入力不正'),
    password: yup.string().required('必須').matches(regexp.password, 'pass入力不正'),
})