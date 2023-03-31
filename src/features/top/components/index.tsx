import React from "react";

import useTop from "../hooks/useTop";

const Top: React.FC = () => {

    const {
        authCheck,
        clickLoginOrDash,
        clickRegisterBtn
    } = useTop()

    return (
        <>
            <div>
                <h1>TOP</h1>
                {
                    !authCheck &&
                    <button 
                        type="button"
                        onClick={clickRegisterBtn}
                    >
                            会員登録
                    </button>
                }
                <button 
                    type="button" 
                    onClick={clickLoginOrDash}
                >
                        { authCheck ? 'dashborad' : 'login' }
                </button>
            </div>
        </>
    )
}

export default Top;