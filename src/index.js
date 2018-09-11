import React from 'react';
import ReactDOM from 'react-dom';
//root보다 부모인 DOM에 대해 css를 설정한다.
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//id가 root인 곳부터 렌더링된다.
ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
