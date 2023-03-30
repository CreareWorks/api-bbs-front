import React from "react";
import { useNavigate } from "react-router-dom";

const useDashborad = () => {

    const navigate = useNavigate();
    
    const clickChangeDisplayBtn = (value: string) => {
        switch (value) {
            case 'posts':
                navigate('/authAfter/posts/postsList');
                break;
            case 'name':
                navigate('/authAfter/changeUserMeta/changeName');
                break;
            case 'pass':
                navigate('/authAfter/changeUserMeta/changePass');
                break;
            default:
                navigate('/');
                break;
        }
    }

    return {
        clickChangeDisplayBtn
    }
}

export default useDashborad;