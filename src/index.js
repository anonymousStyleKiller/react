import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postsData = [
    {id: "1", name: "Anton", lastName: "Kharchenko", likesCount: "0"},
    {id: "2", name: "Alex", lastName: "Glinka", likesCount: "23"}
];
let dialogs = [
    {id: "1", name: "Anton"},
    {id: "2", name: "Dima"},
    {id: "3", name: "Sasha"},
    {id: "4", name: "Nadya"},
    {id: "5", name: "Artem"},
];
let message = [
    {id: "1", message: "Hi"},
    {id: "2", message: "How are you?"},
    {id: "3", message: "Hello"},
    {id: "4", message: "Yo"},
    {id: "5", message: "Privet"},
];

ReactDOM.render(<App postsData={postsData} dialogs={dialogs} message={message}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
