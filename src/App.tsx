import './styles/App.css';
import './styles/buttonDesign.css';
import { Route } from './routes'; // ルーティング必要な各コンポーネントを管理したファイルをimport
import { BrowserRouter } from 'react-router-dom';
//import { Provider } from 'react-redux'; // reduxを使うため、Providerを外側で囲ってあげる
//import { store } from './re-ducks/store/store';

import HeaderComponent from './components/Header';

import { Me } from "./re-ducks/ducks/Auth/oparations";
import { useAppDispatch } from "./re-ducks/store/hook";
import { useEffect } from "react";

const App = () => {

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(Me());
    },[])

  return (
    <div className="App">
        {/* BrowserRouter は最初に読み込ませる */}
        <BrowserRouter>
            {/* 共通のHedaerを読み込み */}
            < HeaderComponent />

            {/* 認証前Route */}
            <Route />
        </BrowserRouter>
      {/* </Provider> */}
    </div>
  );
}

export default App;
