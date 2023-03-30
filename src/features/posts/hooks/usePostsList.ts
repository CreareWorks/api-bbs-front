import React, { useCallback, useLayoutEffect, useState,  } from "react";

import type { FnProps } from "../types/postsProps";
import { result } from "../utils/initilalize";

import postsGet from "../API/postsGet";

import { Posts } from "../types/postsBaseResponse";


const postListHook = (props: FnProps) => {

    /**
     * states
     */
    // ページネーションstate
    const [pageUrl, setPageUrl] = useState<string>("http://localhost/api/posts/search/ALL123456789?page=1");

    // 検索文字列state
    const [searchText, setSearchText] = useState("");

    // 検索ボタン押下判定state
    const [clickSearchBtnJudge, setClickSearchBtnJudge] = useState(false);

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
        console.log(response)
        return response;
    };

    /**
     * list監視
     */
    const getPostsLists = useCallback( async() => {
        const newListData = await getPostList(pageUrl, searchText);
        setNewList(newListData);
    },[props.checkUpdateList, pageUrl, clickSearchBtnJudge ]) //list更新時、ページャー切替、検索ボタン押下

    /**
     * list取得APIを実行
     */
    useLayoutEffect(() => {
        getPostsLists();
    },[props.checkUpdateList, pageUrl, clickSearchBtnJudge])

    /****************************************************************************/

    // list監視に使用するメソッド
    /**
     * ページャークリック
     * @param clickPageUrl 
     */
    const clickPager = (clickPageUrl: string) => {
        setPageUrl(clickPageUrl); // SELECTしたい対象のpageをクエリパラメータに含むエンドポイントをSet
    }

    return {
        newList,
        clickPager,
        searchText,
        setSearchText,

        clickSearchBtnJudge, 
        setClickSearchBtnJudge
    }
}

export default postListHook;