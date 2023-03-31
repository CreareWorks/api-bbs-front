// reduxのストアエントリポイントだと思っている。
// ここでreducerで定義されているモノが、ストアに登録され、呼び出せるようになっている。
// メソッドやステートは各ファイルで定義されている。
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import tokenReducer from '../ducks/Auth/tokenSlice';
import authCheckReducer from '../ducks/Auth/authCheckSlice';

export const store = configureStore({
    reducer: {
        token: tokenReducer,
        authCheck: authCheckReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>