import React from 'react';
import './index.css';
import store from './redux/redux-store';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";



export let renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider value={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root'));
};

renderEntireTree();

store.subscribe(() => {
    // let getState = store.getState();
    renderEntireTree();
});

serviceWorker.unregister();
