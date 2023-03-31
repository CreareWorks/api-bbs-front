import React from "react";
import postListHook from "../hooks/usePostsList";

import type { FnProps } from "../types/postsProps";

import Modal from "./parts/Modal";

const PostsList: React.FC<FnProps> = (props) => {
    const formStyle = {
        marginTop: '5%',
    }
    const formStyle2 = {
        border: '1px solid gray',
        margin: '5% auto',
        padding: '1%',
        width: '80%'
    }
    const ulStyle = {
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'center',
    }
    const listStyle = {
        margin: '3%',
        cursor: 'pointer'
    }
    const listActiveStyle = {
        margin: '3%',
        color: 'red',
        backGroundColor: 'red',
        cursor: 'pointer'
    }
    const pStyle = {
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'teal'
    }

    const {
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
                            <div key={list.post_id} style={formStyle2}>
                                <div>
                                    <p style={pStyle}>タイトル</p>
                                    <p>{list.post_title}</p>
                                </div>
                                <div>
                                    <p style={pStyle}>本文</p>
                                    <p>{list.post_body}</p>
                                </div>
                                
                                {
                                    (list.post_user_id === meMeta.id) &&
                                    <div>
                                        <button 
                                            type="button"
                                            onClick={() => {
                                                showEditDisplay(list.post_id)
                                            }}
                                        >
                                            編集
                                        </button>
                                        <button 
                                            type="button"
                                            onClick={() => {
                                                setShowModal(!showModal)
                                                setPostId(list.post_id)
                                            }}
                                        >
                                            削除
                                        </button>
                                    </div>
                                }
                            </div>
                        </>
                    )
                })
            }

            {/* modal */}
            <Modal 
                showFlag={showModal} 
                setShowModal={setShowModal} 
                showModal={showModal} 
                postId={postId}
                clickDeleteOkBtn={clickDeleteOkBtn}
            /> 
            
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