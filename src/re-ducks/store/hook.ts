import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store'; 

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>(); // 「各コンポーネントで都度、import して型定義して〜」　というのをやらないくてもいいようにここで型定義してuseAopDispachという名前で保持、各コンポーネントで呼び出す時は、当ファイルをimportしてuseAooDispachを使用するだけでOK
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;