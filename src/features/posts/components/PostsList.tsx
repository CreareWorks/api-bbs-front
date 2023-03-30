import React from "react";
import postListHook from "../hooks/usePostsList";

import type { FnProps } from "../types/postsProps";

const PostsList: React.FC<FnProps> = (props) => {
    const formStyle = {
        marginTop: '5%',
    }
    const formStyle2 = {
        marginTop: '10%',
        border: '1px solid gray',
        margin: '10% auto'
    }
    const ulStyle = {
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'center',
    }
    const listStyle = {
        margin: '3%'
    }
    const listActiveStyle = {
        margin: '3%',
        color: 'red',
        backGroundColor: 'red'
    }

    const {
        newList,
        clickPager,
        searchText,
        setSearchText,

        clickSearchBtnJudge, 
        setClickSearchBtnJudge
    } = postListHook(props);

    return (
        <>  
            <form style={formStyle}>
                <label htmlFor="search">
                    記事検索:
                    <input 
                        value={searchText} 
                        onChange={(e) => setSearchText(e.target.value)}
                        type="text" 
                        id="search" 
                    />
                </label>
                <button 
                    type="button"
                    onClick={() => setClickSearchBtnJudge(!clickSearchBtnJudge)}
                >
                    検索
                </button>
            </form>

            <h1>投稿一覧</h1>
            {
                newList.result.data.map((list: any, index: number) => {
                    return (
                        <>
                            <table key={list.post_id} style={formStyle2}>
                                <thead>
                                    <th colSpan={2}>各レコード</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>タイトル:</th>
                                        <td>{list.post_title}</td>
                                        
                                    </tr>
                                    <tr>
                                        <th>本文:</th>
                                        <td>{list.post_body}</td>
                                    </tr>
                                    <tr>
                                        <td><button type="button">編集</button></td>
                                        <td><button type="button">削除</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </>
                    )
                })
            }

            {/* ページネーション */}
            <ul style={ulStyle}>
                {
                    newList.result.links.map((links: any, index: number) => {
                        return (
                            <li 
                                style={links.active ? listActiveStyle : listStyle}
                                key={links.label}
                                onClick={() => clickPager(links.url)}
                            >
                                {
                                    (() => {
                                        if(links.label === '&laquo; Previous'){
                                            if ((links.url !== null)) {
                                                return ('<');
                                            }
                                        } else if (links.label === 'Next &raquo;'){
                                            if ((links.url !== null)) {
                                                return ('>');
                                            }
                                        } else {
                                            return links.label;
                                        }
                                    })()
                                }
                            </li>
                        )
                    })
                }
            </ul>

        </>
    )
}

export default PostsList;