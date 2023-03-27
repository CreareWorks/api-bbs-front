import React from "react";

import useDashborad from "../hooks/useDashborad";

const Dashborad = () => {
    const {
        clickChangeUserNameBtn,
        clickChangeUserPassBtn 
    } = useDashborad();

    return (
        <>
            <h1>DashBorad</h1>
            <button type="button">新規投稿/閲覧ページ</button>
            <button type="button" onClick={clickChangeUserNameBtn}>
                name変更
            </button>
            <button type="button" onClick={clickChangeUserPassBtn}>
                pass変更
            </button>
        </>
    )
}

export default Dashborad;