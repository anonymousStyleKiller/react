import React from 'react';
import './index.css';
import store from './redux/redux-store';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";


export let renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>,
        document.getElementById('root'));

};

renderEntireTree(store.getState());

store.subscribe(() => {
    let getState = store.getState();
    renderEntireTree(getState);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
