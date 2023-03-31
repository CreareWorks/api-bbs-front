import React from "react";

import * as yup from 'yup';

export const schema = yup.object().shape({
    post_title: 
        yup.string().
        required('必須').
        max(15, "15文字以下で入力してください"),
    post_body:
        yup.string().
        required('必須').
        max(140, "140文字以下で入力してください"),
})
