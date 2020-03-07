import React from 'react';
import './index.css';
import store from './redux/state';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



export let renderEntireTree = (state) => {
    ReactDOM.render(
        <App state={state} addPost={store.addPost.bind(store)} 
         updateNewPostText={store.updateNewPostText.bind(store)} />,
        document.getElementById('root'));
}

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
