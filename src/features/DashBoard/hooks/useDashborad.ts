import React from "react";
import { useNavigate } from "react-router-dom";

const useDashborad = () => {

    const navigate = useNavigate();
    
    const clickChangeUserNameBtn = () => {
        navigate('/authAfter/changeUserMeta/changeName');
    }
    const clickChangeUserPassBtn = () => {
        navigate('/authAfter/changeUserMeta/changePass');
    }

    return {
        clickChangeUserNameBtn,
        clickChangeUserPassBtn 
    }
}

export default useDashborad;