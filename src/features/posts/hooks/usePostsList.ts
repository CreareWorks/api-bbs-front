import React, { useCallback, useLayoutEffect, useState,  } from "react";
import { useNavigate } from "react-router-dom";

import { useMeMetaSelector } from "../../../re-ducks/ducks/Auth/authCheckSlice";

import type { FnProps } from "../types/postsProps";
import { result } from "../utils/initilalize";

import postsGet from "../API/postsGet";
import postsDelete from "../API/postsDelete";

import { Posts } from "../types/postsBaseResponse";

const postListHook = (props: FnProps) => {

    const navigate = useNavigate();

    // 認証中情報を取得
    const meMeta = useMeMetaSelector();

    /**
     * states
     */
    // ページネーションstate
    const [pageUrl, setPageUrl] = useState<string>("http://localhost/api/posts/search/ALL123456789?page=1");

    // 検索文字列state
    const [searchText, setSearchText] = useState("");

    // 検索ボタン押下判定state
    const [clickSearchBtnJudge, setClickSearchBtnJudge] = useState(false);

    // 削除確認Modal state
    const [showModal, setShowModal] = useState(false);
    // 削除対象のpost_id　state
    const [postId, setPostId] = useState(0);
    // 削除完了フラグ list監視に使用
    const [deleteComplete, setDeleteComplete] = useState(false);

    // リストstate
    const [newList, setNewList] = useState<Posts>({
        status: 0,
        message: "",
        success: true,
        result: result
    })
    
    /****************************************************************************/

    // List取得ロジック
    /**
     * list取得を行うメソッドを定義
     * @param pageUrl 
     * @returns 
     */
    const getPostList = async(pageUrl: string, searchText: string) => {
        const response = await postsGet(pageUrl, searchText);
        return response;
    };

    /**
     * list監視
     */
    const getPostsLists = useCallback( async() => {
        const newListData = await getPostList(pageUrl, searchText);
        setNewList(newListData);
    },[props.checkUpdateList, pageUrl, clickSearchBtnJudge, deleteComplete ]) //list更新時、ページャー切替、検索ボタン押下

    /**
     * list取得APIを実行
     */
    useLayoutEffect(() => {
        getPostsLists();
    },[props.checkUpdateList, pageUrl, clickSearchBtnJudge, deleteComplete])

    /****************************************************************************/

    // list監視に使用するメソッド
    /**
     * ページャークリック
     * @param clickPageUrl 
     */
    const clickPager = (clickPageUrl: string) => {
        setPageUrl(clickPageUrl); // SELECTしたい対象のpageをクエリパラメータに含むエンドポイントをSet
    }

    /**
     * Modal内OKボタンクリック
     */
    const clickDeleteOkBtn = async(postId: number) => {
        // try catch面倒なので省略
        const result = await postsDelete(postId);
        if(result.status === 200) {
            setDeleteComplete(!deleteComplete);
        }
    }

    /****************************************************************************/
    // others
    /**
     * 編集画面遷移
     */
    const showEditDisplay = (postId: number) => {
        navigate('/authAfter/posts/postsEdit', {
            state: postId,
        });
    }


    return {
        meMeta,

        newList,
        clickPager,
        searchText,
        setSearchText,

        clickSearchBtnJudge, 
        setClickSearchBtnJudge,

        showModal,
        setShowModal,
        clickDeleteOkBtn,

        postId,
        setPostId,

        showEditDisplay
    }
}

export default postListHook;