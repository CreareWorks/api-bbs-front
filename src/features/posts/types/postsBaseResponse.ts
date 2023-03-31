
export type PostsBaseResponse<T> = {
    status: number
    message: string
    success: boolean
    result: T
}
export type PostListResult = { // 投稿一覧のResponnseとしての型宣言
    current_page: number
    data: PostList[]
    first_page_url: string
    from: number
    last_page: number
    last_page_url: string
    links: Links[]
    next_page_url: string | null
    path: string
    per_page: number
    prev_page_url: string | null
    to: number
    total: number
}
export type Links = {
    url: string | null | undefined
    label: string | number | undefined
    active: boolean | undefined
}

export type Posts = PostsBaseResponse<PostListResult>



export type PostList = {// 投稿の型宣言(dataの各オブジェクト内の定義)
    post_id: number
    post_user_id: number
    post_title: string
    post_body: string
    created_at: string
    updated_at: string
}

