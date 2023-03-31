import React from "react";

import * as yup from 'yup';

const regexp = {
    name: /^[ァ-ヴー]{5,}$/,
}
export const schema = yup.object().shape({
    name: 
        yup.string().
        required('必須').
        matches(regexp.name, '名前入力不正'),
})