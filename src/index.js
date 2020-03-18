import React from 'react';
import './index.css';
import store from './redux/redux-store';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import storeContext from "./storeContext";


export let renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <storeContext.Provider value={store}>
                <App/>
            </storeContext.Provider>
        </BrowserRouter>,
        document.getElementById('root'));
};

renderEntireTree(store.getState());

store.subscribe(() => {
    let getState = store.getState();
    renderEntireTree(getState);
});

serviceWorker.unregister();
