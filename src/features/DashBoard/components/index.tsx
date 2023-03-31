import React from "react";

import useDashborad from "../hooks/useDashborad";

const Dashborad = () => {
    const {
        clickChangeDisplayBtn
    } = useDashborad();

    return (
        <>
            <h1>DashBorad</h1>

            <button type="button" 
                onClick={( event: React.MouseEvent<HTMLButtonElement, MouseEvent> ) =>
                clickChangeDisplayBtn('posts')}>
                新規投稿/閲覧ページ
            </button>

            <button type="button" 
                onClick={( event: React.MouseEvent<HTMLButtonElement, MouseEvent> ) =>
                clickChangeDisplayBtn('name')}>
                name変更
            </button>

            <button type="button" 
                onClick={( event: React.MouseEvent<HTMLButtonElement, MouseEvent> ) =>
                clickChangeDisplayBtn('pass')}>
                pass変更
            </button>
        </>
    )
}

export default Dashborad;