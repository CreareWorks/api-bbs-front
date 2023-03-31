import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import reportWebVitals from './utils/reportWebVitals';

import { Provider } from 'react-redux'; // reduxを使うため、Providerを外側で囲ってあげる
import { store } from './re-ducks/store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <Provider store={store}>  props で store に対して自分で設定したstore.tsの内容を渡してあげる。　事でdispatch等が使える */}
    <Provider store={store}> 
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
