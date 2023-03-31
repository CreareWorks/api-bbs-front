import axios from "axios";
// 各axiosの型
import type { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

// env的な共通の設定を記述する。

// create : axiosのインスタンス生成(初期設定)
export const axiosClient: AxiosInstance = axios.create({
    baseURL: 'http://localhost/api/',
    headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*',
    },
    timeout: 2000,
});

// リクエスト時必ず通る処理
axiosClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    if (config.headers !== undefined) { // headersが空だったら

        // cookie の取得 とセット
        const AUTHORIZATION = 0;
        const ACCESS_TOKEN = 1;
        let cookieMeta = document.cookie.split(';'); //split(';')を使用しデータを1つずつに分ける
        cookieMeta.forEach((value) => {
            let content = value.split('='); //split('=')を使用しcookie名と値に分ける
            if (content[AUTHORIZATION] === 'Authorization') {
                config.headers.Authorization = content[ACCESS_TOKEN]
            }
        })

    }

    // ここでreturnする事で、axiosClient:の設定に適応
    return config;
});


// レスポンス時必ず通る処理
axiosClient.interceptors.response.use(
    (response: AxiosResponse ) => {
    (error: AxiosError) => {
        switch(error.response?.status) {
            case 401:
                console.log('Unauthorized');
                break;
            case 403:
                console.log('認証err');
                break;
            case 404:
                console.log('404');
                break;
            case 500:
                console.log('構文err');
                break;
        }
    }

    return response;
});
