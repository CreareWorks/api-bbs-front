// リクエスト投げる時に使用
export type Response<T> = {
    status: number,
    data: T
}